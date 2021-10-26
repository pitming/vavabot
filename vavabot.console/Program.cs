using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace vavabot.console
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");

      using IWebDriver driver = new ChromeDriver();
    }
  }
}
