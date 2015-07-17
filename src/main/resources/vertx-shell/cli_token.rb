require 'vertx/util/utils.rb'
# Generated from io.vertx.ext.shell.cli.CliToken
module VertxShell
  #  @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
  class CliToken
    # @private
    # @param j_del [::VertxShell::CliToken] the java delegate
    def initialize(j_del)
      @j_del = j_del
    end
    # @private
    # @return [::VertxShell::CliToken] the underlying java delegate
    def j_del
      @j_del
    end
    # @param [String] s 
    # @return [::VertxShell::CliToken]
    def self.create_text(s=nil)
      if s.class == String && !block_given?
        return ::Vertx::Util::Utils.safe_create(Java::IoVertxExtShellCli::CliToken.java_method(:createText, [Java::java.lang.String.java_class]).call(s),::VertxShell::CliToken)
      end
      raise ArgumentError, "Invalid arguments when calling create_text(s)"
    end
    # @param [String] s 
    # @return [::VertxShell::CliToken]
    def self.create_blank(s=nil)
      if s.class == String && !block_given?
        return ::Vertx::Util::Utils.safe_create(Java::IoVertxExtShellCli::CliToken.java_method(:createBlank, [Java::java.lang.String.java_class]).call(s),::VertxShell::CliToken)
      end
      raise ArgumentError, "Invalid arguments when calling create_blank(s)"
    end
    # @return [String]
    def raw
      if !block_given?
        return @j_del.java_method(:raw, []).call()
      end
      raise ArgumentError, "Invalid arguments when calling raw()"
    end
    # @return [String]
    def value
      if !block_given?
        return @j_del.java_method(:value, []).call()
      end
      raise ArgumentError, "Invalid arguments when calling value()"
    end
    # @return [true,false]
    def text?
      if !block_given?
        return @j_del.java_method(:isText, []).call()
      end
      raise ArgumentError, "Invalid arguments when calling text?()"
    end
    # @return [true,false]
    def blank?
      if !block_given?
        return @j_del.java_method(:isBlank, []).call()
      end
      raise ArgumentError, "Invalid arguments when calling blank?()"
    end
    # @param [String] s 
    # @return [Array<::VertxShell::CliToken>]
    def self.tokenize(s=nil)
      if s.class == String && !block_given?
        return Java::IoVertxExtShellCli::CliToken.java_method(:tokenize, [Java::java.lang.String.java_class]).call(s).to_a.map { |elt| ::Vertx::Util::Utils.safe_create(elt,::VertxShell::CliToken) }
      end
      raise ArgumentError, "Invalid arguments when calling tokenize(s)"
    end
  end
end