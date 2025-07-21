import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Target, Award, Heart, Handshake } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const About = () => {
  const milestones = [
    {
      year: "2018",
      title: "Foundation Established",
      description: "Zakia Relief was founded with a vision to uplift vulnerable communities in Mauritania."
    },
    {
      year: "2019",
      title: "First Community Kitchen",
      description: "Launched our first feeding program, serving 50 families weekly."
    },
    {
      year: "2020",
      title: "Water Access Project",
      description: "Initiated clean water programs, installing our first community water points."
    },
    {
      year: "2021",
      title: "Environmental Initiative",
      description: "Expanded to include community clean-up and environmental education programs."
    },
    {
      year: "2022",
      title: "Partnership Growth",
      description: "Formed strategic partnerships with local organizations to amplify our impact."
    },
    {
      year: "2023",
      title: "Milestone Year",
      description: "Served over 12,000 meals and established 5 new water points."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding, recognizing the dignity of every person we serve."
    },
    {
      icon: Handshake,
      title: "Community",
      description: "We believe in the power of community-driven solutions and collaborative action."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on sustainable, measurable outcomes that create lasting positive change."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We operate with transparency, accountability, and unwavering ethical standards."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Zakia Relief
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
              Founded in 2018, we are a volunteer-driven charitable foundation 
              dedicated to creating sustainable positive change in Mauritania's communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="soft-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Target className="h-6 w-6 mr-3 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  To uplift vulnerable communities in Mauritania by addressing fundamental needs 
                  through food security, clean water access, and environmental stewardship, 
                  while fostering sustainable community development.
                </p>
              </CardContent>
            </Card>

            <Card className="soft-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Users className="h-6 w-6 mr-3 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  A future where every community in Mauritania has access to basic necessities, 
                  lives in a clean environment, and possesses the tools and resources needed 
                  to thrive independently.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="soft-shadow text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 hero-gradient rounded-full w-fit mb-4">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex flex-col md:flex-row items-center md:items-start">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="hero-gradient text-primary-foreground p-4 rounded-full text-center min-w-[80px]">
                    <span className="font-bold text-lg">{milestone.year}</span>
                  </div>
                </div>
                <Card className="flex-1 soft-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Join us in our mission to create lasting positive change in Mauritanian communities. 
            Together, we can build a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hero-gradient">
              <NavLink to="/get-involved">Get Involved</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline">
              <NavLink to="/our-work">See Our Impact</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;