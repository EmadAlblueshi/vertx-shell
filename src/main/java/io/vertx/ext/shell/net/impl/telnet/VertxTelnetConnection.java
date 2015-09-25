package io.vertx.ext.shell.net.impl.telnet;

import io.termd.core.telnet.TelnetConnection;
import io.termd.core.telnet.TelnetHandler;
import io.vertx.core.Context;
import io.vertx.core.buffer.Buffer;
import io.vertx.core.net.NetSocket;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
public class VertxTelnetConnection extends TelnetConnection {

  final NetSocket socket;
  final Context context;
  private Buffer pending;

  public VertxTelnetConnection(TelnetHandler handler, Context context, NetSocket socket) {
    super(handler);
    this.context = context;
    this.socket = socket;
  }

  @Override
  public void schedule(final Runnable task) {
    context.runOnContext(event -> task.run());
  }

  // Not properly synchronized, but ok for now
  @Override
  protected void send(byte[] data) {
    if (pending == null) {
      pending = Buffer.buffer();
      pending.appendBytes(data);
      context.runOnContext(event -> {
        Buffer buf = pending;
        pending = null;
        socket.write(buf);
      });
    } else {
      pending.appendBytes(data);
    }
  }

  @Override
  public void onClose() {
    super.onClose();
  }

  @Override
  public void close() {
    socket.close();
  }
}
