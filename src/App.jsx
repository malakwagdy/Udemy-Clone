import { useState } from "react";
import { FaSearch, FaShoppingCart, FaGlobe, FaTimes, FaArrowLeft, FaArrowRight, FaUsers, FaStar, FaPlay, FaTrophy, FaLightbulb } from "react-icons/fa";

// All the data stored in arrays and objects
const topCategories = [
  { id: 1, name: "Data Science", students: "8.1M+", image: "/images/categories/data-science.png" },
  { id: 2, name: "IT-Certifications", students: "5M+", image: "/images/categories/IT-certifications.png" },
  { id: 3, name: "Generative AI", students: "730K+", image: "/images/categories/generative-ai.png" }
];

const courseCategories = [
  { id: 1, name: "Artificial Intelligence (AI)", active: true },
  { id: 2, name: "Python", active: false },
  { id: 3, name: "Microsoft Excel", active: false },
  { id: 4, name: "AI Agents & Agentic AI", active: false },
  { id: 5, name: "Digital Marketing", active: false },
  { id: 6, name: "Amazon AWS", active: false }
];

const courses = [
  {
    id: 1,
    title: "The Product Management for AI & Data Science Course",
    provider: "365 Careers, Danielle Thé",
    rating: 4.6,
    ratingsCount: 11585,
    price: 349.99,
    image: "/images/courses/course1.png",
    bestseller: true
  },
  {
    id: 2,
    title: "The Beginner's Guide to AI - Unity 6 Compatible",
    provider: "Penny de Byl, Penny Holistic3D",
    rating: 4.4,
    ratingsCount: 4854,
    price: 719.99,
    isPremium: true,
    image: "/images/courses/course2.jpg",
    bestseller: false
  },
  {
    id: 3,
    title: "Complete Python Bootcamp",
    provider: "Jose Portilla",
    rating: 4.6,
    ratingsCount: 125000,
    price: 89.99,
    originalPrice: 199.99,
    image: "/images/courses/course3.png",
    bestseller: true
  },
  {
    id: 4,
    title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
    provider: "365 Careers",
    rating: 4.6,
    ratingsCount: 11618,
    price: 345.99,
    image: "/images/courses/course4.jpg",
    bestseller: true
  }
];

const companies = [
  { id: 1, name: "Volkswagen", logo: "/images/companies/vw.svg" },
  { id: 2, name: "Samsung", logo: "/images/companies/samsung.svg" },
  { id: 3, name: "Cisco", logo: "/images/companies/cisco.svg" },
  { id: 4, name: "Vimeo", logo: "/images/companies/vimeo.svg" },
  { id: 5, name: "P&G", logo: "/images/companies/P&G.svg" },
  { id: 6, name: "Hewlett Packard Enterprise", logo: "/images/companies/hpe.svg" },
  { id: 7, name: "Citi", logo: "/images/companies/citi.svg" },
  { id: 8, name: "Ericsson", logo: "/images/companies/ericsson.svg" }
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [currentHero, setCurrentHero] = useState(0);

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif", width: "100%", overflowX: "hidden" }}>
      {/* Top banner */}
      <div style={{
        backgroundColor: "#c2e9eb",
        color: "black",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14px",
        width: "100%",
        margin: 0,
        position: "relative",
        boxSizing: "border-box"
      }}>
        <div>
          New-learner offer | Courses from £259.99. Click button to see savings. Ends in 5h 44m 8s.
        </div>
        <button style={{
          backgroundColor: "#6b29cf",
          color: "white",
          border: "none",
          padding: "10px 16px",
          borderRadius: "3px",
          cursor: "pointer",
          fontWeight: "bold",
          marginLeft: "10px",
          fontSize: "14px"
        }}>
          Click to redeem
        </button>
        <button style={{
          position: "absolute",
          right: "24px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <FaTimes style={{ color: "#2a2b3f", fontSize: "18px" }} />
        </button>
      </div>

      {/* Header */}
      <header style={{
        backgroundColor: "white",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1d7dc",
        margin: 0
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#a435f0" }}>
            <img src="/images/extras/logo-udemy.svg" alt="Udemy" style={{ width: "90px", height: "40px" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="#" style={{ color: "#2a2b3f", textDecoration: "none", fontSize: "14px", marginLeft: "12px"}}>
            Explore
          </a>
          </div>
        </div>
        
        <div style={{ flex: 1, maxWidth: "900px", margin: "0 40px", minWidth: 0 }}>
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute",
              left: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1
            }}>
              <FaSearch style={{ color: "#6a6f73", fontSize: "16px"}} />
            </span>
            <input
              type="text"
              placeholder="Search for anything"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 15px 10px 40px",
                borderRadius: "20px",
                border: "1px solid #2a2b3f",
                backgroundColor: "white",
                fontSize: "14px"
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a href="#" style={{ color: "#2a2b3f", textDecoration: "none", fontSize: "14px" }}>
            Plans & Pricing
          </a>
          <a href="#" style={{ color: "#2a2b3f", textDecoration: "none", fontSize: "14px" }}>
            Udemy Business
          </a>
          <a href="#" style={{ color: "#2a2b3f", textDecoration: "none", fontSize: "14px" }}>
            Teach on Udemy
          </a>
          <FaShoppingCart style={{ fontSize: "20px", cursor: "pointer", color: "#2a2b3f" }} />
          <button style={{
            backgroundColor: "white",
            color: "#6b29cf",
            border: "1px solid #6b29cf",
            padding: "10px 16px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold"
          }}>
            Log in
          </button>
          <button style={{
            backgroundColor: "#6b29cf",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold"
          }}>
            Sign up
          </button>
          <div style={{ 
            backgroundColor: "white", 
            borderRadius: "5px", 
            border: "1px solid #6b29cf", 
            padding: "10px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          }}>
            <FaGlobe style={{ fontSize: "16px", color: "#2a2b3f" }} />
          </div>
        </div>
      </header>

      {/* Hero section with carousel */}
      <section style={{
        backgroundImage: currentHero === 0 
          ? "url('/images/extras/hero1.jpg')" 
          : "url('/images/extras/hero2.png')",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        padding: "0 0 60px 0",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "40px",
        position: "relative",
        minHeight: "400px",
        width: "100%",
        aspectRatio: "16 / 4"
      }}>
        {/* Hero 1: Subscribe to the best of Udemy */}
        {currentHero === 0 && (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "40px",
            width: "100%",
            maxWidth: "1200px",
            paddingLeft: "120px"
          }}>
            <div style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "4px",
              maxWidth: "500px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
              <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px", color: "#1c1d1f" }}>
                Subscribe to the best of Udemy
              </h1>
              <p style={{ fontSize: "16px", color: "#6a6f73", marginBottom: "24px" }}>
                With Personal Plan, you get access to 26,000+ of our top-rated courses in tech, business, and more.
              </p>
              <button style={{
                backgroundColor: "#6b29cf",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold"
              }}>
                Try it now
              </button>
            </div>
          </div>
        )}

        {/* Hero 2: Jump into learning */}
        {currentHero === 1 && (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "40px",
            width: "100%",
            maxWidth: "1200px",
            paddingLeft: "120px"
          }}>
            <div style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "8px",
              maxWidth: "500px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
              <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px", color: "#1c1d1f" }}>
                Jump into learning — for less
              </h1>
              <p style={{ fontSize: "16px", color: "#6a6f73", marginBottom: "24px" }}>
                If you're new to Udemy, we've got good news: For a limited time, courses start at just £259.99 for new learners!
              </p>
              <button style={{
                backgroundColor: "#6b29cf",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold"
              }}>
                Sign up now
              </button>
            </div>
          </div>
        )}

        {/* Left arrow button */}
        <button
          onClick={() => setCurrentHero(currentHero === 0 ? 1 : 0)}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "1px solid #d1d7dc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "18px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          <FaArrowLeft style={{ fontSize: "18px", color: "#2a2b3f" }} />
        </button>

        {/* Right arrow button */}
        <button
          onClick={() => setCurrentHero(currentHero === 0 ? 1 : 0)}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "1px solid #d1d7dc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "18px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          <FaArrowRight style={{ fontSize: "18px", color: "#2a2b3f" }} />
        </button>
      </section>

      {/* Learn essential skills section */}
      <section style={{ padding: "64px 24px", backgroundColor: "white" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: "0 0 320px", textAlign: "left", marginLeft: "60px", marginRight: "10px" }}>
            <h3 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "16px", color: "#1c1d1f" }}>
              Learn essential career and life skills
            </h3>
            <p style={{ fontSize: "16px", color: "#6a6f73" }}>
              Udemy helps you build in-demand skills fast and advance your career in a changing job market.
            </p>
          </div>
          <div style={{ display: "flex", gap: "20px", flex: 1 }}>
            {topCategories.map((category) => (
              <div
                key={category.id}
                style={{
                  flex: 1,
                  border: "1px solid #d1d7dc",
                  borderRadius: "15px",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  height: "400px"
                }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block"
                  }}
                />
                <div style={{ 
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "16px",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  margin: "16px"
                }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "8px", border: "1px solid #d1d7dc", padding: "4px", borderRadius: "4px" }}>
                    <FaUsers style={{ fontSize: "14px", color: "#6a6f73" }} />
                    <span style={{ fontSize: "14px", color: "#6a6f73" }}>{category.students}</span>
                  </div>
                  <div style={{ fontSize: "18px", fontWeight: "normal", margin: "8px 0px" }}>
                    {category.name}
                  </div>
                  <div style={{ color: "#a435f0", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", gap: "8px" }}>
                    <FaArrowRight style={{ fontSize: "14px", color: "#6a6f73" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
          <button style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1px solid #d1d7dc",
            backgroundColor: "white",
            cursor: "pointer"
          }}>
            <FaArrowLeft style={{ fontSize: "12px", color: "#2a2b3f" }} />
          </button>
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#d1d7dc" }}></div>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#a435f0" }}></div>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#d1d7dc" }}></div>
          </div>
          <button style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1px solid #d1d7dc",
            backgroundColor: "white",
            cursor: "pointer"
          }}>
            <FaArrowRight style={{ fontSize: "12px", color: "#2a2b3f" }} />
          </button>
        </div>
      </section>

      {/* Reimagine your career in the AI era section */}
      <section style={{
        padding: "50px 40px 60px 40px",
        backgroundColor: "#202230",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "60px",
        margin: "0 80px",
        borderRadius: "20px"
      }}>
        <div style={{ flex: "0.7", maxWidth: "500px", color: "white", textAlign: "left" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px", color: "white" }}>
            Reimagine your career in the AI era
          </h2>
          <p style={{ fontSize: "16px", color: "white", marginBottom: "40px", lineHeight: "1.6" }}>
            Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.
          </p>
          
          <div style={{ display: "flex", gap: "30px", marginBottom: "40px", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "200px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ color: "#d2caff", fontSize: "24px" }}>
                  <FaStar />
                </div>
                <span style={{ fontSize: "16px", color: "white" }}>Learn AI and more</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ color: "#ffe1b2", fontSize: "24px" }}>
                  <FaPlay />
                </div>
                <span style={{ fontSize: "16px", color: "white" }}>Practice with AI coaching</span>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "200px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ color: "#bbe7d3", fontSize: "24px" }}>
                  <FaTrophy />
                </div>
                <span style={{ fontSize: "16px", color: "white" }}>Prep for a certification</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ color: "#c2e9eb", fontSize: "24px" }}>
                  <FaLightbulb />
                </div>
                <span style={{ fontSize: "16px", color: "white" }}>Advance your career</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "left" }}>
            <button style={{
              backgroundColor: "white",
              color: "#1c1d1f",
              border: "none",
              padding: "14px 60px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "16px"
            }}>
              Learn more
            </button>
            <p style={{ fontSize: "14px", color: "white", margin: 0 }}>
              Starting at E£204.00/month
            </p>
          </div>
        </div>

        <div style={{ flex: "1.3", maxWidth: "700px" }}>
          <img 
            src="/images/extras/ai-career.png" 
            alt="AI Era" 
            style={{ 
              width: "100%", 
              height: "auto", 
              borderRadius: "8px",
              display: "block"
            }} 
          />
        </div>
      </section>

      {/* Skills to transform section */}
      <section style={{ padding: "64px 24px", backgroundColor: "white", marginLeft: "70px", marginRight: "70px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "normal", marginBottom: "8px", color: "#2a2b3f" }}>
          Skills to transform your career and life
        </h2>
        <p style={{ fontSize: "18px", color: "##595c73", marginBottom: "32px", fontWeight: "300" }}>
          From critical skills to technical topics, Udemy supports your professional development.
        </p>

        {/* Category tabs */}
        <div style={{ display: "flex", gap: "24px", marginBottom: "32px", borderBottom: "1px solid #d1d7dc" }}>
          {courseCategories.map((cat) => (
            <button
              key={cat.id}
              style={{
                padding: "12px 0",
                border: "none",
                backgroundColor: "transparent",
                borderBottom: cat.active ? "2px solid #1c1d1f" : "2px solid transparent",
                color: cat.active ? "#1c1d1f" : "#6a6f73",
                fontWeight: cat.active ? "bold" : "normal",
                cursor: "pointer",
                fontSize: "14px"
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Course cards */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "32px" }}>
          {courses.map((course) => (
            <div
              key={course.id}
              style={{
                flex: "0 0 280px",
                border: "1px solid #d1d7dc",
                borderRadius: "15px",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{backgroundColor: "#f7f9fa", borderRadius: "15px", display: "inline-flex", alignItems: "center", justifyContent: "center", overflow: "hidden", margin: "15px" }}>
                <img
                  src={course.image}
                  alt={course.title}
                  style={{ 
                    height: "150px", 
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", flex: "1", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    marginTop: 0,
                    lineHeight: "1.4",
                    color: "#1c1d1f"
                  }}>
                    {course.title}
                  </h3>
                  <div style={{ fontSize: "12px", color: "#6a6f73", marginBottom: "8px" }}>
                    {course.provider}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "8px"}}>
                    {course.bestseller && (
                      <span style={{ 
                        color: "#0d5261", 
                        fontSize: "12px", 
                        fontWeight: "bold",
                        backgroundColor: "#c2e9eb",
                        padding: "4px 8px",
                        borderRadius: "4px"
                      }}>
                        Bestseller
                      </span>
                    )}
                    {course.isPremium && (
                      <span style={{ 
                        color: "white", 
                        fontSize: "12px", 
                        fontWeight: "bold",
                        backgroundColor: "#5022c3",
                        padding: "4px 8px",
                        borderRadius: "4px"
                      }}>
                        Premium
                      </span>
                    )}
                    <div style ={{ display: "inline-flex", border: "1px solid #d1d7dc", padding: "4px", borderRadius: "4px", alignItems: "center", gap: "4px"}}>
                    <FaStar style={{ color: "#b4690e", fontSize: "12px" }} />
                    <span style={{ color: "#6a6f73", fontWeight: "normal", fontSize: "12px" }}>
                      {course.rating}
                    </span>
                    </div>
                    <span style={{ color: "#6a6f73", fontSize: "12px" , display: "inline-flex", alignItems: "center", gap: "4px", border: "1px solid #d1d7dc", padding: "4px", borderRadius: "4px"}}>
                      {course.ratingsCount.toLocaleString()} ratings
                    </span>
                  </div>
                </div>
                <div>
                  <span style={{
                    fontSize: "16px",
                    fontWeight: "normal",
                    color: "#1c1d1f"
                  }}>
                    E£{course.price}
                  </span>
                  {course.originalPrice && (
                    <span style={{
                      fontSize: "14px",
                      color: "#6a6f73",
                      textDecoration: "line-through",
                      marginLeft: "8px"
                    }}>
                      E£{course.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          <button style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #d1d7dc",
            backgroundColor: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center"
          }}>
            <FaArrowRight style={{ fontSize: "12px", color: "#2a2b3f" }} />
          </button>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <a href="#" style={{ color: "#6d28d2", textDecoration: "none", fontSize: "14px", fontWeight: "bold" }}>
            Show all Artificial Intelligence (AI) courses →
          </a>
        </div>
      </section>

      {/* Trusted companies section */}
      <section style={{
        padding: "64px 24px",
        backgroundColor: "#f7f9fa",
        textAlign: "center"
      }}>
        <p style={{ marginBottom: "32px", fontSize: "19px", color: "#6a6f73" }}>
          Trusted by over 17,000 companies and millions of learners around the world
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "48px",
          flexWrap: "wrap"
        }}>
          {companies.map((company) => (
            <img
              key={company.id}
              src={company.logo}
              alt={company.name}
              style={{ width: "120px", height: "40px", objectFit: "contain" }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
