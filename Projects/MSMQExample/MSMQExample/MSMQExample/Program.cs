using System;
using System.Collections.Generic;
using System.Linq;
using System.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace MSMQExample
{
    class Program
    {
       
        static void Main(string[] args)
        {
            const string queueName = @".\private$\TestQueue";
            SendMessageToQueue(queueName);

            
        }
        public static void SendMessageToQueue( string queueName)
        {
            MessageQueue msMq = null;
            if(!MessageQueue.Exists(queueName))
            {
                MessageQueue.Create(queueName);
            }
            else
            {
                msMq = new MessageQueue(queueName);
            }

            try
            {
                QueueNames qn = new QueueNames()
                {
                    firstName = "Sai",
                    lastName = "Prakash"
                };
                msMq.Send(qn);
            }
            catch (MessageQueueException ee)
            {
                Console.Write(ee.ToString());
            }
            catch (Exception eee)
            {
                Console.WriteLine(eee.ToString());
            }

            finally
            {
                msMq.Close();
            }
            Console.WriteLine("Message sent......");
        }

    }

    public class QueueNames
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
    }

}
