interface Option {
  id: string;
  text: string;
}

export interface Question {
  question: string;
  options: Option[];
  correctAnswers: string;
}

export const questions: Question[] = [
  {
    "question": "When did Tata Consultancy Services (TCS) hadbeen established as adivision of tata sons?",
    "options": [
      {
        "id": "a",
        "text": "1988"
      },
      {
        "id": "b",
        "text": "1978"
      },
      {
        "id": "c",
        "text": "1968"
      },
      {
        "id": "d",
        "text": "1958"
      }
    ],
    "correctAnswers": "1968"
  },
  {
    "question": "Who is the current Chairman of TATA Group? (2024)",
    "options": [
      {
        "id": "a",
        "text": "Rajesh Gopinathan"
      },
      {
        "id": "b",
        "text": "Jamsetji Nusserwanji"
      },
      {
        "id": "c",
        "text": "Natarajan Chandrasekaran"
      },
      {
        "id": "d",
        "text": "Ratan Tata"
      }
    ],
    "correctAnswers": "Natarajan Chandrasekaran"
  },
  {
    "question": "Who is the Founder of TATA Group?",
    "options": [
      {
        "id": "a",
        "text": "Dorabji Tata"
      },
      {
        "id": "b",
        "text": "Jamsetji Tata"
      },
      {
        "id": "c",
        "text": "Ratan Tata"
      },
      {
        "id": "d",
        "text": "F.C Kohli"
      }
    ],
    "correctAnswers": "Jamsetji Tata"
  },
  {
    "question": "Which of following are TCS Values?",
    "options": [
      {
        "id": "a",
        "text": "Excellence"
      },
      {
        "id": "b",
        "text": "Integrity"
      },
      {
        "id": "c",
        "text": "Respect for the Individual"
      },
      {
        "id": "d",
        "text": "Leading Change"
      },
      {
        "id": "e",
        "text": "Learning and sharing"
      },
      {
        "id": "f",
        "text": "All are the TCS Values"
      }
    ],
    "correctAnswers": "All are the TCS Values"
  },
  {
    "question": "COIN TM Stands for",
    "options": [
      {
        "id": "a",
        "text": "Co-Interactive Network"
      },
      {
        "id": "b",
        "text": "Co-Inductive Network"
      },
      {
        "id": "c",
        "text": "Co-Innovation Network"
      },
      {
        "id": "d",
        "text": "Co-Integrated Network"
      }
    ],
    "correctAnswers": "Co-Innovation Network"
  },
  {
    "question": "Which of the following giits are never appropriate and should never be given?",
    "options": [
      {
        "id": "a",
        "text": "Gifts in the form of services or other non-cash benefits (e.g. a promise of employment)"
      },
      {
        "id": "b",
        "text": "gifts that are prohibited by the gift givers or recipient's organisation"
      },
      {
        "id": "c",
        "text": "gifts of modest value such as company branded promotional merchandise example a desk calendar"
      },
      {
        "id": "d",
        "text": "gifts that are prohibited by law"
      },
      {
        "id": "e",
        "text": "gifts of cash or gold or other precious gems"
      },
      {
        "id": "f",
        "text": "A, B, D & E are Correct"
      },
    ],
    "correctAnswers": "A, B, D & E are Correct"
  },
  {
    "question": "Our company has recently announced the launch of a new business initiative. In connection with this, your friend who is a journalist with a leading business newspaper has asked you to provide some information that he could cover in his forthcoming article. He promised not to quote you, or reveal your idea. Should you be giveing him this information?",
    "options": [
      {
        "id": "a",
        "text": "No"
      },
      {
        "id": "b",
        "text": "Yes"
      }
    ],
    "correctAnswers": "No"
  },
  {
    "question": "Sexual harassment in TCS is _____.",
    "options": [
      {
        "id": "a",
        "text": "Prohibited"
      },
      {
        "id": "b",
        "text": "Discouraged"
      },
      {
        "id": "c",
        "text": "Frowned upon"
      }
    ],
    "correctAnswers": "Prohibited"
  },
  {
    "question": "Which are the below stated activities are examples of potential conflicts of interest?",
    "options": [
      {
        "id": "a",
        "text": "An employee engages in a business, activity or relationship with anyone who is party to a transaction with our company."
      },
      {
        "id": "b",
        "text": "An employee undertakes an activity by the interest of our company or our group companies an become promise of defeacted"
      },
      {
        "id": "c",
        "text": "An employee does anything by which an independent judgment of our companies or our group companies best interest conanot be exercised."
      },
      {
        "id": "d",
        "text": "An employee involving in use of prohibited drugs and substances creates genuine safety and other risk at worklaces"
      },
      {
        "id": "e",
        "text": "A, B, & C are correct."
      }
    ],
    "correctAnswers": "A, B, & C are correct."
  },
  {
    "question": "While working on a customer project you receive a call from a coleague. He used to manage that customer account before you took over his role. He recalls that he had worked that customer on developing new ordering system which which he thinks would be beneficial for another customer and request you to send him the project details. What should you do?",
    "options": [
      {
        "id": "a",
        "text": "Refrain from sending the requested information"
      },
      {
        "id": "b",
        "text": "Send the requested information"
      }
    ],
    "correctAnswers": "Refrain from sending the requested information"
  },
  {
    "question": "Demand for the process and behaviour change in IT companies is considered as one of the drivers for the growth of IT consultant",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswers": "True"
  },
  {
    "question": "The following quote was said by computer-to-computer can track demand and adjust logistic systems to automatically direct geographical points on demand",
    "options": [
      {
        "id": "a",
        "text": "Notan and Bennigson"
      },
      {
        "id": "b",
        "text": "Sarah Jane Johnston"
      },
      {
        "id": "c",
        "text": "Johnston"
      },
      {
        "id": "d",
        "text": "None of them"
      }
    ],
    "correctAnswers": "Notan and Bennigson"
  },
  {
    "question": "Which of the following are considered as IT cosultatant skills?",
    "options": [
      {
        "id": "a",
        "text": "Technical Skills"
      },
      {
        "id": "b",
        "text": "Advisory Skills"
      },
      {
        "id": "c",
        "text": "Management Skills"
      },
      {
        "id": "d",
        "text": "Communication Skills"
      },
      {
        "id": "f",
        "text": "All of them"
      }
    ],
    "correctAnswers": "All of them"
  },
  {
    "question": "________ is the field which uses computers and other devices for performing operation on data like extraction, updates, storing. etc. ",
    "options": [
      {
        "id": "a",
        "text": "None ofthe above"
      },
      {
        "id": "b",
        "text": "IT Consulting Industry"
      },
      {
        "id": "c",
        "text": "Consulting Operations"
      },
      {
        "id": "d",
        "text": "IT Information Security"
      }
    ],
    "correctAnswers": "IT Consulting Industry"
  },
  {
    "question": "From when the general consulting business evolved to improve the business productivity and maximise profits?",
    "options": [
      {
        "id": "a",
        "text": "1906"
      },
      {
        "id": "c",
        "text": ". 1900"
      },
      {
        "id": "d",
        "text": "1990"
      }
    ],
    "correctAnswers": "1900"
  },
  {
    "question": "TCS had been named as one of the Best Companies to work for women in India by",
    "options": [
      {
        "id": "a",
        "text": "CII"
      },
      {
        "id": "b",
        "text": "Working Mother Media and Avatar Group"
      },
      {
        "id": "c",
        "text": "Will forum India"
      },
      {
        "id": "d",
        "text": "The Cambridge Group"
      }
    ],
    "correctAnswers": "Working Mother Media and Avatar Group"
  },
  {
    "question": "What does Business 4.0 include?",
    "options": [
      {
        "id": "a",
        "text": "” Intelligence, Agile, Automated and on the Cloud"
      },
      {
        "id": "b",
        "text": "Integrated, Agile, Automated and on the Cloud"
      },
      {
        "id": "c",
        "text": "Integrated, Agile, Artificial Intelligence and Automated"
      },
      {
        "id": "d",
        "text": "Intelligent, Waterfall, Automated and on the Cloud"
      }
    ],
    "correctAnswers": "Intelligence, Agile, Automated and on the Cloud"
  },
  {
    "question": "Business 4.0 organization works on the approach based on premises that there are aboundant resources such as",
    "options": [
      {
        "id": "a",
        "text": "Abundance of Resources & Abundance of talent"
      },
      {
        "id": "b",
        "text": "Abundance of Resources & Abundance of Funds"
      },
      {
        "id": "c",
        "text": "Abundance of Capital & Abundance of talent"
      },
      {
        "id": "d",
        "text": "Abundance of Capital & Abundance of Excellence"
      }
    ],
    "correctAnswers": "Abundance of Capital & Abundance of talent"
  },
  {
    "question": "TCS had been recognised as a prominent ________ at the Manufacturing Leadership 100 Award for the fourth time",
    "options": [
      {
        "id": "a",
        "text": "Global Partner"
      },
      {
        "id": "b",
        "text": "Oracle Integrated Cloud Partner"
      },
      {
        "id": "c",
        "text": "Technology Partner"
      },
      {
        "id": "d",
        "text": "Adobe System Integrator Partner"
      }
    ],
    "correctAnswers": "Technology Partner"
  },
  {
    "question": "When did TCS had been Ranked No 1 in the BT 500 India's most valuable company?",
    "options": [
      {
        "id": "a",
        "text": "2017"
      },
      {
        "id": "b",
        "text": "2015"
      },
      {
        "id": "d",
        "text": "2018"
      }
    ],
    "correctAnswers": "2017"
  },
  {
    "question": "What are the 4 V’s of big Data?",
    "options": [
      {
        "id": "a",
        "text": "None of the above"
      },
      {
        "id": "b",
        "text": "Volume, Velocity, Variety, Veracity"
      },
      {
        "id": "c",
        "text": "Volume, Viscosity, Variety, Veracity"
      },
      {
        "id": "d",
        "text": "Volume, Velocity, Viscosity, Variety"
      }
    ],
    "correctAnswers": "Volume, Velocity, Variety, Veracity"
  },
  {
    "question": "Click Stream Analytics is associated with which characteristics of data?",
    "options": [
      {
        "id": "a",
        "text": "Volume"
      },
      {
        "id": "b",
        "text": "Velocity"
      },
      {
        "id": "d",
        "text": "Veracity"
      }
    ],
    "correctAnswers": "Velocity"
  },
  {
    "question": "Name of the intelligent question-answering machine which beat Jeopardy Quiz Championship?",
    "options": [
      {
        "id": "a",
        "text": "Apache Hadoop"
      },
      {
        "id": "b",
        "text": "IBM BlueMix"
      },
      {
        "id": "d",
        "text": "Amazon Dynamo"
      }
    ],
    "correctAnswers": "IBM Watson"
  },
  {
    "question": "What Big Data open-source software was developed from Google's Map reduce concept?",
    "options": [
      {
        "id": "a",
        "text": "Splunk"
      },
      {
        "id": "b",
        "text": "Puppet"
      },
      {
        "id": "c",
        "text": "Hadoop"
      },
      {
        "id": "d",
        "text": "MongoDB"
      }
    ],
    "correctAnswers": "Hadoop"
  },
  {
    "question": "What are the problems associated with Big Data?",
    "options": [

      {
        "id": "a",
        "text": "Not accustomed to dealing with such large quantities of data"
      },
      {
        "id": "b",
        "text": "Overly complex with relatively slow systems"
      },
      {
        "id": "c",
        "text": "Inexperience collecting data from non traditional experiences"
      },
      {
        "id": "d",
        "text": "All of the above"
      },
    ],
    "correctAnswers": "All of the above"
  },
  {
    "question": "What 1s a best Mobile App when we are dealing with a Resource Intensive Application?",
    "options": [
      {
        "id": "a",
        "text": "Web Application"
      },
      {
        "id": "b",
        "text": "Native Application"
      },
      {
        "id": "c",
        "text": "Hybrid Application"
      },
      {
        "id": "d",
        "text": "Composite Application"
      }
    ],
    "correctAnswers": "Native Application"
  },
  {
    "question": "The paradigm where a basic mobile friendly Html page will be available and the JavaScript code will add the functionality progressively to the page is called _________ .",
    "options": [
      {
        "id": "a",
        "text": "Recursive Enhancements"
      },
      {
        "id": "b",
        "text": "Gradual Enhancements"
      },
      {
        "id": "c",
        "text": "Progressive Enhancements"
      },
      {
        "id": "d",
        "text": "Progressive Design"
      }
    ],
    "correctAnswers": "Progressive Enhancements"
  },
  {
    "question": "Technique involves fluid layout design so the site can adjust according the resolution of the devices.",
    "options": [
      {
        "id": "a",
        "text": "Adaptive Design"
      },
      {
        "id": "b",
        "text": "Responsive Design"
      },
      {
        "id": "c",
        "text": "Progressive Design"
      },
      {
        "id": "d",
        "text": "Hybrid Design"
      }
    ],
    "correctAnswers": "Responsive Design"
  },
  {
    "question": "Key Expectations in building mobile applications",
    "options": [
      {
        "id": "a",
        "text": "Cost effectiveness"
      },
      {
        "id": "b",
        "text": "Single Code base"
      },
      {
        "id": "c",
        "text": "Option 1 & 2"
      },
      {
        "id": "d",
        "text": "Steady Development"
      }
    ],
    "correctAnswers": "Option 1 & 2"
  },
  {
    "question": "Swipe enabling, Flip features Slide features etc comes under which challanges of Mobile Technologies",
    "options": [
      {
        "id": "a",
        "text": "Application Caching"
      },
      {
        "id": "b",
        "text": "Offline database support"
      },
      {
        "id": "c",
        "text": "Security"
      },
      {
        "id": "d",
        "text": "None of the above"
      }
    ],
    "correctAnswers": "None of the above"
  },
  {
    "question": "Robots can be used for building houses",
    "options": [
      {
        "id": "a",
        "text": ".1Tme"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswers": "True"
  },
  {
    "question": "Which one 1s not one of the Cloud based services",
    "options": [
      {
        "id": "a",
        "text": "Public Cloud"
      },
      {
        "id": "b",
        "text": "Private Cloud"
      },
      {
        "id": "c",
        "text": "Hybrid Cloud"
      },
      {
        "id": "d",
        "text": "Enterprise Cloud"
      }
    ],
    "correctAnswers": "Enterprise Cloud"
  },
  {
    "question": "Prime Factors to consider while deciding between public and private clouds",
    "options": [
      {
        "id": "a",
        "text": "All of the above"
      },
      {
        "id": "b",
        "text": "Performance Expectations"
      },
      {
        "id": "d",
        "text": "Elementary Expense"
      }
    ],
    "correctAnswers": "All of the above"
  },
  {
    "question": "Full form of SaaS is",
    "options": [
      {
        "id": "a",
        "text": "Service as a Software"
      },
      {
        "id": "b",
        "text": "Service as a Support"
      },
      {
        "id": "d",
        "text": "Software as a Service"
      }
    ],
    "correctAnswers": "Software as a Service"
  },
  {
    "question": "Which is the Cloud Service where company owns the infrastructure?",
    "options": [
      {
        "id": "a",
        "text": "Enterprise Cloud"
      },
      {
        "id": "b",
        "text": "Hybrid Cloud"
      },
      {
        "id": "d",
        "text": "Private Cloud"
      }
    ],
    "correctAnswers": "Private Cloud"
  },
  {
    "question": "The field that investigates the mechanics of human intelligence is ________ .",
    "options": [
      {
        "id": "a",
        "text": "History"
      },
      {
        "id": "b",
        "text": "Psychology"
      },
      {
        "id": "c",
        "text": "Sociology"
      },
      {
        "id": "d",
        "text": "Cognitive science"
      }
    ],
    "correctAnswers": "Cognitive science"
  },
  {
    "question": "Popular approaches of Artificial Intelligence are",
    "options": [
      {
        "id": "a",
        "text": "Computational Intelligence"
      },
      {
        "id": "b",
        "text": "All of the above"
      },
      {
        "id": "c",
        "text": "Statistical Methods"
      },
      {
        "id": "d",
        "text": "Traditional Symbolic Al"
      }
    ],
    "correctAnswers": "All of the above"
  },
  {
    "question": "The Science behind simulating structures inside brain is called as",
    "options": [
      {
        "id": "a",
        "text": "Artificial Intelligence"
      },
      {
        "id": "b",
        "text": "Machine Learning"
      },
      {
        "id": "c",
        "text": "Robotics"
      },
      {
        "id": "d",
        "text": "Neural Networks"
      }
    ],
    "correctAnswers": "Neural Networks"
  },
  {
    "question": "Which of the method is used by Humans while making judgements?",
    "options": [
      {
        "id": "a",
        "text": "Conscious"
      },
      {
        "id": "b",
        "text": "Intuitive bases"
      },
      {
        "id": "c",
        "text": "Program based"
      },
      {
        "id": "d",
        "text": "Step by step"
      }
    ],
    "correctAnswers": "Intuitive based"
  },
  {
    "question": "The study of computer algorithms that improve automatically through experience is called as ______ .",
    "options": [
      {
        "id": "a",
        "text": "Machine Learning"
      },
      {
        "id": "b",
        "text": "Neural Networks"
      },
      {
        "id": "c",
        "text": "Artificial Intelligence"
      },
      {
        "id": "d",
        "text": "Robotics"
      }
    ],
    "correctAnswers": "Machine Learning"
  },
  {
    "question": "TCS Machine First™ Delivery Model includes",
    "options": [
      {
        "id": "a",
        "text": "” MFDM Execution Model"
      },
      {
        "id": "b",
        "text": "MFDM Collaboration Platform"
      },
      {
        "id": "c",
        "text": "All of them"
      },
      {
        "id": "d",
        "text": "MEDM Maturity Model"
      },
      {
        "id": "e",
        "text": "MFDM Framework"
      }
    ],
    "correctAnswers": "All of them"
  },
  {
    "question": "________ focus on augmenting human contextual knowledege with technology to drive business outcomes",
    "options": [
      {
        "id": "a",
        "text": "Inherently"
      },
      {
        "id": "b",
        "text": "Business First"
      },
      {
        "id": "c",
        "text": "— Ubiquitous"
      },
      {
        "id": "d",
        "text": "Polymorphic"
      }
    ],
    "correctAnswers": "Business First"
  },
  {
    "question": "TCS supports MFDM™ implementation through its ___________ service",
    "options": [
      {
        "id": "a",
        "text": "Enterprise Cloud & Artificial Intelligence"
      },
      {
        "id": "b",
        "text": "Enterprisé¢ Intelligent Automation"
      },
      {
        "id": "c",
        "text": "Enterprise Intelligent Automation & Artificial Intelligence"
      },
      {
        "id": "d",
        "text": "Artificial Intelligence"
      }
    ],
    "correctAnswers": "Enterprise Intelligent Automation & Artificial Intelligence"
  },
  {
    "question": "Which among the following key for IT Management is based on proper use of data?",
    "options": [
      {
        "id": "a",
        "text": "Embedding security in every system"
      },
      {
        "id": "b",
        "text": "Maintaining a focus on customer"
      },
      {
        "id": "c",
        "text": "Embracing polymorphic analytics"
      },
      {
        "id": "d",
        "text": "Making data ubiquitous"
      }
    ],
    "correctAnswers": "Embedding security in every system"
  },
  {
    "question": "You have developed a new ordering system for your client. Client appreciated your post production of new system. A copy hte code and send it to your personal mail for future reference. Is it acceptable?",
    "options": [
      {
        "id": "a",
        "text": "You have to check with your supervisor and save the code"
      },
      {
        "id": "b",
        "text": "As you have developed the code, you have full right to save"
      },
      {
        "id": "c",
        "text": "You can get the permission from the client and get the code"
      },
      {
        "id": "d",
        "text": "You should not save the code for reference"
      }
    ],
    "correctAnswers": "You should not save the code for reference"
  },
  {
    "question": "When Tata Airlines, a division of Tata Sons, is established?",
    "options": [
      {
        "id": "a",
        "text": "1926"
      },
      {
        "id": "b",
        "text": "1930"
      },
      {
        "id": "d",
        "text": "\"\" +932"
      }
    ],
    "correctAnswers": "Ans: - 1932"
  },
  {
    "question": "Medical Robots can perform Surgical Operations independently",
    "options": [
      {
        "id": "a",
        "text": "False"
      },
      {
        "id": "b",
        "text": "True"
      }
    ],
    "correctAnswers": "False"
  },
  {
    "question": "Artificial Intelligence cannot be used in Health care as this involves Doctors and patients.",
    "options": [
      {
        "id": "a",
        "text": "True"
      }
    ],
    "correctAnswers": "False"
  },
  {
    "question": "Which 1s India’s first indigenously designed and manufactured car?",
    "options": [
      {
        "id": "a",
        "text": "Ambassedor"
      },
      {
        "id": "b",
        "text": "Tata Indica"
      },
      {
        "id": "c",
        "text": "Tata Nano"
      },
      {
        "id": "d",
        "text": "Maruthi 800"
      }
    ],
    "correctAnswers": "Tata Indica"
  },
  {
    "question": "Which characteristics of Big Data deals with Trust worthiness of data?",
    "options": [
      {
        "id": "a",
        "text": "Veracity"
      },
      {
        "id": "b",
        "text": "Volume"
      },
      {
        "id": "c",
        "text": "Trust"
      },
      {
        "id": "d",
        "text": "Velocity"
      }
    ],
    "correctAnswers": "Veracity"
  },
  {
    "question": "We can use Natural Languages Processing for reviewing Tweet feeds",
    "options": [
      {
        "id": "a",
        "text": "False"
      },
      {
        "id": "b",
        "text": "True"
      }
    ],
    "correctAnswers": "True"
  },
  {
    "question": "How many independently operating companies are there under TATA group?",
    "options": [
      {
        "id": "b",
        "text": "89"
      },
      {
        "id": "d",
        "text": "Over 100"
      }
    ],
    "correctAnswers": "Over 100"
  },
  {
    "question": "Which of the methods is used by Humans while making judgements",
    "options": [
      {
        "id": "a",
        "text": "Conscious"
      },
      {
        "id": "b",
        "text": "Step by step"
      },
      {
        "id": "c",
        "text": "Program based"
      },
      {
        "id": "d",
        "text": "Intuitive based"
      }
    ],
    "correctAnswers": "Intuitive based"
  },
  {
    "question": "The change of mindset is required — from Optimizing scarce resources to harnessing aboundance will help in",
    "options": [
      {
        "id": "a",
        "text": "Leveraging ecosystems"
      },
      {
        "id": "b",
        "text": "Embracing risk"
      },
      {
        "id": "c",
        "text": "Mass personalization"
      },
      {
        "id": "d",
        "text": "Creating exponential value"
      }
    ],
    "correctAnswers": "Embracing risk"
  },
  {
    "question": "Who is the Founder of TATA group?",
    "options": [
      {
        "id": "a",
        "text": "F.C Kohli"
      },
      {
        "id": "b",
        "text": "* Jamsetji"
      },
      {
        "id": "c",
        "text": ". Dorabji Tata"
      },
      {
        "id": "d",
        "text": "Ratan Tata"
      }
    ],
    "correctAnswers": "Jamsetj1 Tata"
  },
  {
    "question": "For organizations that aren't currently looking to do big data analytics, there is little or no benefit to examining the data they're being used",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswers": "True"
  },
  {
    "question": "What is the change of mindset Business 4.0 is looking at when it comes to embracing risk?",
    "options": [
      {
        "id": "a",
        "text": "Embracing risk and risk mitigation plan"
      },
      {
        "id": "b",
        "text": "None of these"
      },
      {
        "id": "c",
        "text": "Utilize abundance of capital & abundance of talent"
      },
      {
        "id": "d",
        "text": "Embracing risk and adapt and transform continuously"
      }
    ],
    "correctAnswers": "Embracing risk and adapt and transform continuously"
  },
  {
    "question": "Who formalized the Tata Code of Conduct?",
    "options": [
      {
        "id": "a",
        "text": "Jamsetj Tata"
      },
      {
        "id": "b",
        "text": "Dorabji Tata"
      },
      {
        "id": "c",
        "text": "F.C Kohli"
      },
      {
        "id": "d",
        "text": "Ratan Tata"
      }
    ],
    "correctAnswers": "Ratan Tata"
  },
  {
    "question": "The field that investigates the mechanics of human intelligence is _________.",
    "options": [
      {
        "id": "a",
        "text": "Sociology"
      },
      {
        "id": "b",
        "text": "Cognitive Science"
      },
      {
        "id": "c",
        "text": "Psychology"
      },
      {
        "id": "d",
        "text": "History"
      }
    ],
    "correctAnswers": "Cognitive Science"
  },
  {
    "question": "After the successful completion of a project, the client gifted a diamond ring to the onsite project manager. What should the manager do?",
    "options": [
      {
        "id": "a",
        "text": "Inform the supervisor and accept the gift"
      },
      {
        "id": "b",
        "text": "Inform Client about our company's gifts and hospitality policy and reject the gift"
      },
      {
        "id": "c",
        "text": "Raise a ethical incident against your client"
      },
      {
        "id": "d",
        "text": "Accept the gift"
      }
    ],
    "correctAnswers": "Inform Client about our company's gifts and hospitality policy and reject the gift"
  },
  {
    "question": "In the 1990°s which company did TATA Steel acquire?",
    "options": [
      {
        "id": "b",
        "text": "ArcelorMittal"
      },
      {
        "id": "c",
        "text": "Baosteel"
      },
      {
        "id": "d",
        "text": "Posco"
      }
    ],
    "correctAnswers": "Corus"
  },
  {
    "question": "Artificial Intelligence is the science and engineering of making intellligent machines",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswers": "True"
  },
  {
    "question": "Which is the old name of TATA MOTORS?",
    "options": [
      {
        "id": "a",
        "text": "Tata Automobile Enterprise"
      },
      {
        "id": "b",
        "text": "Tata'Engineering and Locomotive Company"
      },
      {
        "id": "c",
        "text": "Tata Engineering Company"
      },
      {
        "id": "d",
        "text": "Tata Locomotive Company"
      }
    ],
    "correctAnswers": "Tata Engineering and Locomotive Company"
  },
  {
    "question": "Machine Perception is the ability to use input from sensors to get information",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswers": "True"
  },
  {
    "question": "Person who identified the Qualification problem in artificial intelligence is _________.",
    "options": [
      {
        "id": "a",
        "text": "Alan Turing"
      },
      {
        "id": "b",
        "text": "John McCarthy"
      },
      {
        "id": "d",
        "text": "Ben Brain"
      }
    ],
    "correctAnswers": "John McCarthy"
  },
  {
    "question": "Big Data Infrastructure can store video files as well",
    "options": [
      {
        "id": "a",
        "text": "False"
      },
      {
        "id": "b",
        "text": "True"
      }
    ],
    "correctAnswers": "True"
  },
  {
    "question": "The Science and Technology which deal with Automatic, Computer driven machine which replaces Humans is called ________ .",
    "options": [
      {
        "id": "a",
        "text": "Congnitive Science"
      },
      {
        "id": "b",
        "text": "Robotics"
      },
      {
        "id": "c",
        "text": "Human Kinematics"
      },
      {
        "id": "d",
        "text": "None of the Above"
      }
    ],
    "correctAnswers": "Robotics"
  },
  {
    "question": "Adopters of Business 4.0 do this by",
    "options": [
      {
        "id": "a",
        "text": "Leveraging ecosystems"
      },
      {
        "id": "b",
        "text": "~ Creating exponential values"
      },
      {
        "id": "c",
        "text": "~All of the above"
      },
      {
        "id": "d",
        "text": "Mass personalization"
      }
    ],
    "correctAnswers": "all of the above"
  },
  {
    "question": "Some challenges in Artificial Intelligence are",
    "options": [
      {
        "id": "a",
        "text": "All of the above"
      },
      {
        "id": "b",
        "text": "Common science"
      },
      {
        "id": "c",
        "text": "~ Technology"
      },
      {
        "id": "d",
        "text": "Cost"
      }
    ],
    "correctAnswers": "all of the above"
  },
  {
    "question": "Business 4.0 brings sophistication to the",
    "options": [
      {
        "id": "a",
        "text": "Supply chain"
      },
      {
        "id": "b",
        "text": ". Demand chain"
      },
      {
        "id": "c",
        "text": ". Demand-Supply"
      }
    ],
    "correctAnswers": "Demand-Supply"
  },
  {
    "question": "When did Tata Motors unveil Tata Nano?",
    "options": [
      {
        "id": "a",
        "text": "2008"
      },
      {
        "id": "b",
        "text": "2009"
      },
      {
        "id": "c",
        "text": "2007"
      },
      {
        "id": "d",
        "text": "2010"
      }
    ],
    "correctAnswers": "2008"
  },
  {
    "question": "Big Data Analytics on Genomic Medicine will help in predction of genetic diseases",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswers": "True"
  },
  {
    "question": "World’s biggest source of Big Data",
    "options": [
      {
        "id": "a",
        "text": "Oceanic Research"
      },
      {
        "id": "b",
        "text": "‘Space Research"
      },
      {
        "id": "c",
        "text": "Traditional Systems"
      },
      {
        "id": "d",
        "text": "Mobile Phones"
      }
    ],
    "correctAnswers": "Space Research"
  },
  {
    "question": "According to a study by IBM, approximately how much data existed in digital universe?",
    "options": [
      {
        "id": "a",
        "text": "2.7 exabytes"
      },
      {
        "id": "b",
        "text": "27 zetabytes"
      },
      {
        "id": "c",
        "text": "2.7 zetabytes"
      },
      {
        "id": "d",
        "text": "270 petabytes"
      }
    ],
    "correctAnswers": "Ans: - 2.7 zetabytes"
  },
  {
    "question": "90% of the world’s data was created in the last",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswers": "True"
  },
  {
    "question": "Who formed a joint venture to open Starbucks cafes accross India?",
    "options": [
      {
        "id": "a",
        "text": "Tata Global Beverages and Starbucks"
      },
      {
        "id": "b",
        "text": "None of those"
      },
      {
        "id": "c",
        "text": "Coffee Day Global Limited & Tata Global Beverages"
      },
      {
        "id": "d",
        "text": "Starbucks and Cafe Coffee Day"
      }
    ],
    "correctAnswers": "Tata Global Beverages and Starbucks"
  },

  // Start Here
  {
    "question": "How many industries do TCS provides its consultancy?",
    "options": [
      {
        "id": "a",
        "text": "12"
      },
      {
        "id": "b",
        "text": "10"
      },
      {
        "id": "c",
        "text": "20"
      },
      {
        "id": "d",
        "text": "15"
      }
    ],
    "correctAnswers": "Ans: 12"
  },
  {
    "question": "What is the name of the first research center established by TCS?",
    "options": [
      {
        "id": "a",
        "text": "Tata Institute of Social Sciences (TISS)"
      },
      {
        "id": "b",
        "text": "Tata Research Development and Design Center (TRDDC)"
      },
      {
        "id": "c",
        "text": "Tata Institute of Fundamental Research"
      },
      {
        "id": "d",
        "text": "Indian Institute of Science"
      }
    ],
    "correctAnswers": "Tata Research Development and Design Center (TRDDC)"
  },
  {
    "question": "82. What was TCS’s first onsite project?",
    "options": [
      {
        "id": "a",
        "text": "Automating Johannesburg Stock Exchange"
      },
      {
        "id": "b",
        "text": "Burroughs (the first business computer"
      },
      {
        "id": "c",
        "text": "Developing electronic depository, SECOM for SIS SegalnterSettle, Switzerland"
      },
      {
        "id": "d",
        "text": "Institutional Group and Information Company (IGIC)"
      }
    ],
    "correctAnswers": "Institutional Group and Information Company (IGIC)"
  },
  {
    "question": "TCS is ______ largest IT firm in the world?",
    "options": [
      {
        "id": "a",
        "text": "8th"
      },
      {
        "id": "b",
        "text": "2nd"
      },
      {
        "id": "c",
        "text": "4th"
      },
      {
        "id": "d",
        "text": "6th"
      }
    ],
    "correctAnswers": "Ans: A"
  },
  {
    "question": "Who is TCS first General Manager?",
    "options": [{
      "id": "a",
      "text": "JRD Tata"
    },
    {
      "id": "b",
      "text": "F.C Kohli"
    },
    {
      "id": "c",
      "text": "Ratan Tata"
    },
    {
      "id": "d",
      "text": "DS Ramadorai"
    }],
    "correctAnswers": "F.C Kohli"
  },
  {
    "question": "TCS provides six major IT services",
    "options": [{
      "id": "a",
      "text": "Customer Development, Application Management, Migration and Re-engineering, System Integration, Testing, Performance Engineering"
    },
    {
      "id": "b",
      "text": "Custom Application Development, Application Management, Migration and Re-engineering, Business Management, Testing, Performance Engineering"
    },
    {
      "id": "c",
      "text": "Custom Application Development, Application Management, Migration and Re-engineering, System Integration, Testing, Performance Engineering"
    },
    {
      "id": "d",
      "text": "Customer Development, Application Management, Migration and Re-engineering, Business Management, Testing, Performance Engineering"
    }],
    "correctAnswers": "Custom Application Development, Application Management, Migration and Re-engineering, Business Management, Testing, Performance Engineering"
  },
  {
    "question": "Which model does TCS follow?",
    "options": [
      {
        "id": "a",
        "text": "Global Integrated Delivery Model"
      },
      {
        "id": "b",
        "text": "World Integrated Delivery Model"
      },
      {
        "id": "c",
        "text": "World Network Delivery Model"
      },
      {
        "id": "d",
        "text": "Global Network Delivery Model"
      }
    ],
    "correctAnswers": "Global Network Delivery Model"
  },
  {
    "question": " Tata Consulting Services goes public in India’s public sector's largest initial public offer in ",
    "options": [
      {
        "id": "a",
        "text": "2006"
      },
      {
        "id": "b",
        "text": "1999"
      },
      {
        "id": "c",
        "text": "2002"
      },
      {
        "id": "d",
        "text": "2004"
      }
    ],
    "correctAnswers": "d"
  },

  {
    "question": "We use Natural Language Processing for",
    "options": [],
    "correctAnswers": "True"
  },
  {
    "question": "Which institution was set up in 1936, a pioneer in the social work education in Asia-specific region?",
    "options": [
      {
        "id": "a",
        "text": "Indian Institute of Science"
      },
      {
        "id": "b",
        "text": "Tata Institute of Social Sciences"
      },
      {
        "id": "c",
        "text": "Tata Institute of Fundamental Research"
      },
      {
        "id": "d",
        "text": "Tata Management Training Center"
      }
    ],
    "correctAnswers": "Tata Institute of Social Sciences"
  },
  {
    "question": "Which of the following is not TATA brand?",
    "options": [
      {
        "id": "a",
        "text": "Voltas"
      },
      {
        "id": "b",
        "text": "~ Tetley"
      },
      {
        "id": "c",
        "text": "Westside"
      },
      {
        "id": "d",
        "text": "Cafe Coffee Day"
      }
    ],
    "correctAnswers": "Cafe Coffee Day"
  },
  {
    "question": "In which year, Tata Consultancy Services (TCS) becomes first Indian company to cross one Billion dollars in revenue?",
    "options": [
      {
        "id": "a",
        "text": "2003"
      },
      {
        "id": "b",
        "text": "1995"
      },
      {
        "id": "c",
        "text": "2010"
      },
      {
        "id": "d",
        "text": "2008"
      }
    ],
    "correctAnswers": "2003"
  },
  {
    "question": "In which year, TCS completed 1ts 50 glorious years?",
    "options": [
      {
        "id": "a",
        "text": "2018"
      },
      {
        "id": "b",
        "text": "2019"
      },
      {
        "id": "c",
        "text": "2020"
      },
      {
        "id": "d",
        "text": "2017"
      }
    ],
    "correctAnswers": "2018"
  },
  {
    "question": " An international brand acquired by Indian business group Tata tea in 2000 is _______ .",
    "options": [
      {
        "id": "a",
        "text": "Yorkshire Tea"
      },
      {
        "id": "b",
        "text": "Lipton"
      },
      {
        "id": "c",
        "text": "Tetley group"
      },
      {
        "id": "d",
        "text": "Stash Tea"
      }
    ],
    "correctAnswers": "Tetley group"
  },
  {
    "question": "Which of the following is not part of five core TCS values",
    "options": [
      {
        "id": "a",
        "text": "Excellence"
      },
      {
        "id": "b",
        "text": "Respecting Everyone"
      },
      {
        "id": "c",
        "text": "Respect for individual"
      },
      {
        "id": "d",
        "text": "Leading change"
      }
    ],
    "correctAnswers": "Respecting Everyone"
  },
  {
    "question": "To which of the following US based motor company, the Jaguar and Land Rover belonged?",
    "options": [
      {
        "id": "a",
        "text": "Chevrolet"
      },
      {
        "id": "b",
        "text": "Ford"
      },
      {
        "id": "d",
        "text": "GMC"
      }
    ],
    "correctAnswers": "Ford"
  },
  {
    "question": "TCS Innovation Labs are providing extended capabilities in which of the following areas?",
    "options": [
      {
        "id": "a",
        "text": "Image Processing"
      },
      {
        "id": "b",
        "text": "Biometrics"
      },
      {
        "id": "c",
        "text": "Analytics"
      },
      {
        "id": "d",
        "text": "All of the above"
      }
    ],
    "correctAnswers": "All of the above"
  },
  {
    "question": "Who request the Tata group to manufacture cosmetics in India, leading to the setting up of Lakme",
    "options": [
      {
        "id": "a",
        "text": "Jawaharlal Nehru"
      },
      {
        "id": "b",
        "text": "Indira Gandhi"
      },
      {
        "id": "c",
        "text": "Motilal Nehru"
      },
      {
        "id": "d",
        "text": "Morar Desai"
      }
    ],
    "correctAnswers": "Jawaharlal Nehru"
  },
  {
    "question": "Tata Group Companies are spread across which of the following domains?",
    "options": [
      {
        "id": "a",
        "text": "Communication & ITES"
      },
      {
        "id": "b",
        "text": "~ Manufacturing"
      },
      {
        "id": "c",
        "text": "Consumer & Retail"
      },
      {
        "id": "d",
        "text": "All of the above"
      }
    ],
    "correctAnswers": "All of the above"
  },
  {
    "question": "In which year Vistara takes to the skies & reaches a high with 500,000 happy flyers?",
    "options": [
      {
        "id": "a",
        "text": "1990"
      },
      {
        "id": "b",
        "text": "2005"
      },
      {
        "id": "c",
        "text": "2010"
      },
      {
        "id": "d",
        "text": "2015"
      }
    ],
    "correctAnswers": "2015"
  },
  {
    "question": "Which Tata Company becomes the first listed Indian IT Company to reach the $100 billion market capitalisation mark in 2018?",
    "options": [
      {
        "id": "a",
        "text": "Tata Chemicals"
      },
      {
        "id": "b",
        "text": "Tata Communications"
      },
      {
        "id": "c",
        "text": "Tata Investment Corporation"
      },
      {
        "id": "d",
        "text": "Tata Consultancy Service"
      }
    ],
    "correctAnswers": "Tata Consultancy Service"
  },
  {
    "question": "What is the critical mission of Tata group that 1s at the heart of everything that it does how and what it is?",
    "options": [
      {
        "id": "a",
        "text": "Corporate Social Responsibility (CSR)"
      },
      {
        "id": "b",
        "text": "Brand Equity & Business Promotion (BEBP)"
      },
      {
        "id": "c",
        "text": "Tata Code of Conduct (TCoC)"
      },
      {
        "id": "d",
        "text": "Tata Business Excellence Model (TBEM)"
      }
    ],
    "correctAnswers": "Corporate Social Responsibility"
  },
  {
    "question": "India’s best-known Cancer Hospital and Research Center",
    "options": [
      {
        "id": "a",
        "text": "Tata Memorial Hospital"
      },
      {
        "id": "b",
        "text": "JRD Tata Eco-technology Center"
      },
      {
        "id": "c",
        "text": "Both of the above options"
      },
      {
        "id": "d",
        "text": "None of the above"
      }
    ],
    "correctAnswers": "Tata Memorial Hospital"
  }
];