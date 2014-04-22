# An unneceesarily complex version of "hello world" that uses OOP & rspec

require 'rspec'

class HelloObj
  attr_accessor :say_hello
  def initialize
    @say_hello = "Hello"
  end
end


describe HelloObj do
  before(:each) do
    @hello = HelloObj.new
  end

  it "says hello" do
    @hello.say_hello.should eq("Hello")
  end
end
