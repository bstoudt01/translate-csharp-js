using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
namespace Insulter
{
    class Program
    {
        static void Main(string[] args)
        {
            //list of random insult strings
            List<string> insults = new List<string>
            {
                "You look like what morning breath smells like.",
                "If you tried to give me cpr I would probably throw myself back under water",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?"
            };

            //count of list elements
            int insultsCount = insults.Count();

            //list to hold the random numbers (which can not be duplicates)
            List<int> insultsGiven = new List<int>();

            //loop to display 3 insults at random, and no duplicates
            for (int i = 0; i < 3; i++)
            {
                //random number within range of list element length
                int insultValue = new Random().Next(0, insultsCount - 1);

                //the element that is represented by the random number
                string insult = insults[insultValue];

                // if the insult element id is already in this list, then do nothing, 
                //else add the number and console the insult
                while (!insultsGiven.Contains(insultValue))
                {
                    insultsGiven.Add(insultValue);
                    Console.WriteLine(insult);
                }
            }
        }
    }
}