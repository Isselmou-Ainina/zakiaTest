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
      title: "Major Water Impact",
      description: "Achieved delivery of over 300 tons of clean water to communities across Nouakchott."
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
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              About Zakia Relief
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Founded in 2018, we are a volunteer-driven charitable foundation 
              dedicated to creating sustainable positive change in Mauritania's communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="nonprofit-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <Card className="modern-card h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl md:text-2xl flex items-center">
                <Target className="h-5 w-5 md:h-6 md:w-6 mr-3 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-base md:text-lg leading-relaxed">
                To uplift vulnerable communities in Mauritania by addressing fundamental needs 
                through food security, clean water access, and environmental stewardship, 
                while fostering sustainable community development.
              </p>
            </CardContent>
          </Card>

          <Card className="modern-card h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl md:text-2xl flex items-center">
                <Users className="h-5 w-5 md:h-6 md:w-6 mr-3 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-base md:text-lg leading-relaxed">
                A future where every community in Mauritania has access to basic necessities, 
                lives in a clean environment, and possesses the tools and resources needed 
                to thrive independently.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="nonprofit-heading">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="modern-card text-center h-full">
                <CardHeader className="pb-4">
                  <div className="mx-auto p-3 md:p-4 community-gradient rounded-full w-fit mb-4">
                    <value.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm md:text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/30 section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <h2 className="nonprofit-heading">Our Journey</h2>
          <div className="space-y-6 md:space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 lg:mr-8">
                  <div className="community-gradient text-white p-3 md:p-4 rounded-full text-center min-w-[70px] md:min-w-[80px]">
                    <span className="font-bold text-sm md:text-lg">{milestone.year}</span>
                  </div>
                </div>
                <Card className="modern-card flex-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg md:text-xl">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm md:text-base leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="nonprofit-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="nonprofit-heading">Be Part of Our Story</h2>
          <p className="nonprofit-subheading">
            Join us in our mission to create lasting positive change in Mauritanian communities. 
            Together, we can build a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Button asChild size="lg" className="community-gradient text-white touch-target">
              <NavLink to="/get-involved" className="flex items-center">Get Involved</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-outline text-primary hover:text-white hover:bg-primary touch-target">
              <NavLink to="/our-work" className="flex items-center">See Our Impact</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;