import BannerSection from "../component/banner/BannerSection";
import FooterSection from "../component/footer/FooterSection";
import HeaderSection from "../component/header/HeaderSection";
import SearchFormModal from "../component/modal/SearchFormModal";
import VideoModal from "../component/modal/VideoModal";

const Home1 = () => {
  return (
    <main>
      <HeaderSection />
      <BannerSection />
      {/* <ServiceSection />
      <AboutSection />
      <VideoSection />
      <TestimonialSection />
      <PricingSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
      <BlogSection /> */}
      <FooterSection
        style="rv-20-footer"
        logo="/acaiberry/assets/img/rv-20-logo-light.png"
        footerContactStyle="rv-20-footer__contact-card"
        footerFormStyle="rv-20-footer-nwsltr__form"
      />
      {/* Modals */}
      <SearchFormModal />
      <VideoModal videoUrl="https://www.youtube.com/embed/b-5E5suKIAY?si=KAbRHsNOuo4JeZiV" />
    </main>
  );
};

export default Home1;
