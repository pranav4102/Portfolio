"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Code2, User } from "lucide-react";
import Container from "@/components/Container";

const tabMenu = [
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];

const tabContent = {
 
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Bachelor of Engineering in Computer Science",
        institution: "Panimalar Institute of Technology",
        period: "2020 - 2024",
        description:
          "Specialized in Software Development and Data Science. Graduated with a strong foundation in cutting-edge technologies.",
        achievements: ["7.7 CGPA"],
      },
      {
        degree: "Higher Secondary (Computer Science)",
        institution: "Velammal Matriculation Higher Secondary School",
        period: "2018 - 2020",
        description:
          "Studied key principles of Computer Science, including programming basics and have Foundation in core subjects like Physics, Chemistry, and Mathematics",
        achievements: ["70 Percentage"],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "Frontend development involves using technologies like HTML5, CSS3, and JavaScript to create interactive and visually appealing user interfaces. TypeScript adds static typing to JavaScript, enhancing code quality and maintainability. Libraries and frameworks like React and Next.js enable the development of dynamic, component-based applications with efficient rendering. Bootstrap helps quickly design responsive layouts, ensuring that websites work seamlessly on any device. These tools together empower developers to build modern, high-performance web applications.",
          skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Bootstrap"
        ]
        
      },
      {
        name: "Backend Development",
        description:
          "Backend development involves creating the server-side logic and APIs that power web applications. It includes working with technologies like Node.js for server-side JavaScript execution, and Express.js to build fast and lightweight web frameworks for building RESTful APIs. PHP is also a popular backend language, widely used for server-side scripting and developing dynamic web pages. These tools enable developers to manage databases, authenticate users, and ensure smooth communication between the frontend and backend of web applications.",
          skills: [
            "Node.js",
            "Express.js",
            "PHP"
        ]
        
      },
      {
        name: "Databases",
        description:
          "Databases are essential for storing and managing data in web applications. MySQL is a popular relational database management system that uses SQL (Structured Query Language) for managing data in tables. MongoDB, on the other hand, is a NoSQL database that stores data in flexible, JSON-like documents, making it ideal for handling unstructured or semi-structured data. Both databases are widely used in full-stack development, with MySQL being suited for structured data and MongoDB for more dynamic, scalable applications.",
          skills: [
            "MongoDB",
            "SQL Server",
        ]
      },
        {
          name: "Programming Languages",
          description:
            "Python is a versatile, high-level language known for its simplicity and readability, making it ideal for both beginners and advanced developers. It's widely used in fields like web development, data science, artificial intelligence, and automation. Java, a powerful, object-oriented language, is known for its portability, performance, and extensive ecosystem. It's commonly used for building large-scale enterprise applications, mobile apps with Android, and backend services. Both languages offer strong community support and a vast number of libraries and frameworks to enhance development.",
            skills: [
              "Python",
              "Java",
              
          ]
      },
      {
        name: "Tools & Others",
        description:
          "Git is a distributed version control system that allows developers to track changes in their code and collaborate effectively. GitHub is a platform that hosts Git repositories and provides version control, collaboration, and project management features. Postman is a powerful API testing tool that helps developers design, test, and document APIs with ease. VS Code is a lightweight yet powerful source code editor, with support for a wide range of programming languages and features like debugging, IntelliSense, and extensions to enhance productivity.",
          skills: [
            "Git",
            "GitHub",
            "Postman",
            "VS Code"
        ]
        
      },
    ],
  },
  about: {
    title: "About Me",
    bio: " I am MITHUL PRANAV M. I was born and brought up in Chennai, Tamil Nadu. I pursued my Engineering at PANIMALAR INSTITUTE OF TECHNOLOGY, Poonamallee, Tamil Nadu.I am a highly motivated Computer Science Engineering student. My goal is to leverage my skills and knowledge to contribute to the Product and Services based Industry and to gain positive impact in the industry.I am eager to apply my skills and knowledge in a challenging professional environment, where I can contribute to the advancement of and Problem solving. If you are looking for a dedicated and ambitious computer engineering graduate with a strong focus on problem solving ability, I would love to connect and explore potential opportunities.",
    languages: ["English (Expert)", "Tamil (Native)", "Telugu (Intermediate)", "French (Basic)"],
  },
};

export default function ResumePage() {
  return (
    <section className="flex flex-col justify-center text-white py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full"
        >
          <Tabs
            defaultValue="experience"
            className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
          >
            <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
              {tabMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                    <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                    {item.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 min-h-[400px]">
              <TabsContent value="education">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.education.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.degree}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.skills.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.skills.categories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/60 mb-4 font-normal leading-7">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="about">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.about.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <p className="mb-6 text-lg">{tabContent.about.bio}</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </Container>
    </section>
  );
}
