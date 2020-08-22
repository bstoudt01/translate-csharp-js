using System;

//required for List method?
using System.Collections.Generic;

namespace Wish_List
{
    class Program
    {
        static void Main(string[] args)
        {
            // a NEW list that holds strings aka array with strings in it
            List<string> names = new List<string>
            {
                "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'",
                "The ability to think of interesting wishes on short notice",
                "A washtub of Skittles",
                "World peace, but not the kind of world peace where all the humans are removed from existence",
                "A TV that is NOT internet-capable",
                "The ability to fly, but, like, really fast...not just, like, how fast I can walk, but, like, fast, you know?"

            };
            //console.log
            Console.WriteLine("My wishes...");
            //for loop of each string in the list (array)
            foreach (string name in names)
            {
                Console.WriteLine(name);
            }

        }
    }
}