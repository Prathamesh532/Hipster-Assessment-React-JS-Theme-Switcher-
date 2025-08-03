import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Award,
  Globe,
  Heart,
  Zap,
  ShoppingBag,
  Shield,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function About() {
  const { themeConfig } = useTheme();

  const stats = [
    { label: "Happy Customers", value: "10K+", icon: Users },
    { label: "Products Sold", value: "50K+", icon: ShoppingBag },
    { label: "Countries Served", value: "25+", icon: Globe },
    { label: "Years Experience", value: "5+", icon: Award },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving to bring you the latest and greatest.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and transactions are always safe with us.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping to get your orders to you fast.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 10+ years in e-commerce and retail innovation.",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    },
    {
      name: "Mike Chen",
      role: "CTO",
      bio: "Tech expert passionate about creating seamless shopping experiences.",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Creative designer focused on beautiful and intuitive user interfaces.",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-16"
    >
      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className={`text-center py-16 ${
          themeConfig.layout === "grid"
            ? "bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 rounded-3xl border-4 border-dashed border-purple-300 transform -rotate-1"
            : themeConfig.layout === "sidebar"
            ? "bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg border border-gray-700"
            : "bg-gradient-to-b from-blue-50 to-white rounded-lg border border-gray-200"
        }`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className={`w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center mx-auto mb-6 ${
            themeConfig.layout === "grid"
              ? "rounded-full transform rotate-12"
              : "rounded-full"
          }`}
        >
          <Award className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h1
          className={`font-bold text-[var(--color-text)] mb-6 font-[var(--font-primary)] ${
            themeConfig.layout === "grid"
              ? "text-5xl md:text-6xl transform rotate-1"
              : "text-4xl md:text-5xl"
          }`}
          variants={itemVariants}
        >
          About Our Store
        </motion.h1>

        <motion.p
          className={`text-[var(--color-textSecondary)] max-w-3xl mx-auto font-[var(--font-secondary)] ${
            themeConfig.layout === "grid"
              ? "text-xl md:text-2xl font-medium"
              : "text-lg md:text-xl"
          }`}
          variants={itemVariants}
        >
          We're passionate about bringing you the best shopping experience
          through innovative design and cutting-edge technology. Our multi-theme
          system demonstrates our commitment to user experience excellence.
        </motion.p>
      </motion.section>

      {/* Stats Section */}
      <motion.section variants={itemVariants}>
        <div
          className={`grid gap-6 ${
            themeConfig.layout === "grid"
              ? "grid-cols-2 md:grid-cols-4 gap-8"
              : themeConfig.layout === "sidebar"
              ? "grid-cols-2 lg:grid-cols-4"
              : "grid-cols-2 md:grid-cols-4"
          }`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`text-center p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-all duration-300 ${
                  themeConfig.layout === "grid"
                    ? "transform hover:rotate-2 border-2 border-dashed rounded-3xl"
                    : ""
                }`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center mx-auto mb-4 ${
                    themeConfig.layout === "grid"
                      ? "rounded-full"
                      : "rounded-lg"
                  }`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`font-bold text-[var(--color-text)] mb-2 font-[var(--font-primary)] ${
                    themeConfig.layout === "grid" ? "text-3xl" : "text-2xl"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-[var(--color-textSecondary)] text-sm font-[var(--font-secondary)]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        variants={itemVariants}
        className={`grid gap-12 items-center ${
          themeConfig.layout === "sidebar" ? "lg:grid-cols-1" : "md:grid-cols-2"
        }`}
      >
        <div>
          <h2
            className={`font-bold text-[var(--color-text)] mb-6 font-[var(--font-primary)] ${
              themeConfig.layout === "grid"
                ? "text-4xl transform -rotate-1"
                : "text-3xl"
            }`}
          >
            Our Mission
          </h2>
          <p className="text-[var(--color-textSecondary)] mb-6 leading-relaxed font-[var(--font-secondary)]">
            At MultiTheme Store, we believe that great shopping experiences
            should be accessible, beautiful, and delightful. Our mission is to
            revolutionize e-commerce through innovative design and user-centric
            technology.
          </p>
          <p className="text-[var(--color-textSecondary)] mb-6 leading-relaxed font-[var(--font-secondary)]">
            Through our dynamic theme system, we demonstrate how a single
            platform can adapt to different preferences and contexts while
            maintaining exceptional functionality and aesthetics.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all font-[var(--font-secondary)] ${
              themeConfig.layout === "grid" ? "transform hover:rotate-1" : ""
            }`}
          >
            Learn More
          </motion.button>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} className="relative">
          <div
            className={`aspect-square bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center ${
              themeConfig.layout === "grid"
                ? "rounded-full transform -rotate-3"
                : "rounded-2xl"
            }`}
          >
            <Rocket className="w-24 h-24 text-white" />
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--color-accent)] rounded-full animate-pulse" />
          <div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-[var(--color-primary)] rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </motion.div>
      </motion.section>

      {/* Values Section */}
      <motion.section variants={itemVariants}>
        <h2
          className={`font-bold text-[var(--color-text)] mb-8 text-center font-[var(--font-primary)] ${
            themeConfig.layout === "grid"
              ? "text-4xl transform -rotate-1"
              : "text-3xl"
          }`}
        >
          Our Values
        </h2>

        <div
          className={`grid gap-6 ${
            themeConfig.layout === "grid"
              ? "grid-cols-1 md:grid-cols-2 gap-8"
              : themeConfig.layout === "sidebar"
              ? "grid-cols-1 lg:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-primary)] transition-all duration-300 ${
                  themeConfig.layout === "grid"
                    ? "transform hover:rotate-1 border-2 border-dashed"
                    : ""
                }`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center mb-4 ${
                    themeConfig.layout === "grid"
                      ? "rounded-full"
                      : "rounded-lg"
                  }`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className={`font-semibold text-[var(--color-text)] mb-3 font-[var(--font-primary)] ${
                    themeConfig.layout === "grid" ? "text-xl" : "text-lg"
                  }`}
                >
                  {value.title}
                </h3>
                <p className="text-[var(--color-textSecondary)] font-[var(--font-secondary)]">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section variants={itemVariants}>
        <h2
          className={`font-bold text-[var(--color-text)] mb-8 text-center font-[var(--font-primary)] ${
            themeConfig.layout === "grid"
              ? "text-4xl transform -rotate-1"
              : "text-3xl"
          }`}
        >
          Meet Our Team
        </h2>

        <div
          className={`grid gap-8 ${
            themeConfig.layout === "grid"
              ? "grid-cols-1 md:grid-cols-3 gap-8"
              : themeConfig.layout === "sidebar"
              ? "grid-cols-1 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`text-center bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-primary)] transition-all duration-300 ${
                themeConfig.layout === "grid"
                  ? "transform hover:rotate-1 border-2 border-dashed rounded-3xl"
                  : ""
              }`}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={member.avatar}
                alt={member.name}
                className={`w-24 h-24 mx-auto mb-4 object-cover border-4 border-[var(--color-primary)] ${
                  themeConfig.layout === "grid"
                    ? "rounded-full"
                    : "rounded-full"
                }`}
              />
              <h3
                className={`font-semibold text-[var(--color-text)] mb-2 font-[var(--font-primary)] ${
                  themeConfig.layout === "grid" ? "text-xl" : "text-lg"
                }`}
              >
                {member.name}
              </h3>
              <p className="text-[var(--color-primary)] font-medium mb-3 font-[var(--font-secondary)]">
                {member.role}
              </p>
              <p className="text-[var(--color-textSecondary)] text-sm font-[var(--font-secondary)]">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={itemVariants}
        className={`text-center py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl ${
          themeConfig.layout === "grid"
            ? "transform -rotate-1 border-4 border-dashed border-white"
            : ""
        }`}
      >
        <h2
          className={`font-bold text-white mb-4 font-[var(--font-primary)] ${
            themeConfig.layout === "grid"
              ? "text-4xl transform rotate-2"
              : "text-3xl"
          }`}
        >
          Join Our Journey
        </h2>
        <p
          className={`text-white/90 mb-8 max-w-2xl mx-auto font-[var(--font-secondary)] ${
            themeConfig.layout === "grid" ? "text-xl" : "text-lg"
          }`}
        >
          Be part of the future of e-commerce. Experience the power of adaptive
          design and help us shape the next generation of online shopping.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-4 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg font-[var(--font-secondary)] ${
            themeConfig.layout === "grid" ? "transform hover:rotate-1" : ""
          }`}
        >
          Get Started
        </motion.button>
      </motion.section>
    </motion.div>
  );
}
