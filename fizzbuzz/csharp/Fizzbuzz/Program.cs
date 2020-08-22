using System;

namespace Fizzbuzz
{
    class Program
    {
        static void Main(string[] args)
        {
            //Game of FizzBuzz
            // if the number is dividable by 3 you say "fizz"
            //if the number is dividable by 5 you say "buzz"
            //if the number is dividable by 15 you say "fizzbuzz"

            // using % (reaminder sign) to determine
            // if i when divided by 15,5 or 3 has a remainder of 0
            //then display the word for that nubmer if not, then display the number
            for (int i = 1; i <= 100; i++)
            {
                if (i % 15 == 0)
                {
                    Console.WriteLine("fizzbuzz");
                }
                else if (i % 3 == 0)
                {
                    Console.WriteLine("fizz");
                }
                else if (i % 5 == 0)
                {
                    Console.WriteLine("buzz");
                }
                else
                {
                    Console.WriteLine(i);
                }

            }
        }
    }
}