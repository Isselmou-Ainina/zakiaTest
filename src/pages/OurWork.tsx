import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils, Droplets, TreePine, Users, Heart, Target } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const OurWork = () => {
  const programs = [
    {
      icon: Utensils,
      title: "Feeding the Community",
      description: "Fighting hunger by providing nutritious meals to families in need throughout Nouakchott.",
      details: [
        "Weekly food distribution to 200+ families",
        "Emergency meal programs during Ramadan",
        "Nutritional support for children and elderly",
        "Community kitchen initiatives"
      ],
      impact: "12,000+ meals served in 2023"
    },
    {
      icon: Droplets,
      title: "Providing Clean Water",
      description: "Ensuring access to safe, clean drinking water for underserved communities.",
      details: [
        "Installation of community water points",
        "Water filtration system maintenance",
        "Hygiene and sanitation education",
        "Emergency water distribution"
      ],
      impact: "5 new water points established"
    },
    {
      icon: TreePine,
      title: "Cleaning the Community",
      description: "Environmental stewardship through community clean-up drives and education.",
      details: [
        "Monthly neighborhood clean-up events",
        "Waste management education programs",
        "Tree planting initiatives",
        "Recycling awareness campaigns"
      ],
      impact: "15 tons of waste removed in 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Work in Action
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
              Through three core programs, we're building stronger, healthier communities 
              across Nouakchott, Mauritania.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm md:text-base">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>500+ Families Served</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                <span>Since 2018</span>
              </div>
              <div className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                <span>3 Core Programs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <Card key={program.title} className={`soft-shadow ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-center mb-4">
                          <div className="p-3 hero-gradient rounded-lg mr-4">
                            <program.icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl md:text-3xl mb-2">
                              {program.title}
                            </CardTitle>
                            <CardDescription className="text-lg">
                              {program.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <div className="space-y-4">
                        <div className="impact-gradient text-accent-foreground p-4 rounded-lg">
                          <p className="font-semibold text-lg">{program.impact}</p>
                        </div>
                        
                        <ul className="space-y-2">
                          {program.details.map((detail, i) => (
                            <li key={i} className="flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-8 md:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <program.icon className="h-32 w-32 text-primary mx-auto mb-4 opacity-20" />
                        <p className="text-muted-foreground">
                          Program imagery and community photos would go here
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Every contribution helps us expand our reach and deepen our impact 
            in the communities that need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hero-gradient">
              <NavLink to="/donate">Support Our Work</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline">
              <NavLink to="/get-involved">Volunteer With Us</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;