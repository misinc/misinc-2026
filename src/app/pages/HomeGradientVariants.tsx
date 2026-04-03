import HomePage from "@/app/pages/HomePage";
import "@/styles/home-gradient-variants.css";

type HomeGradientVariantProps = {
  variantClassName: string;
};

function HomeGradientVariant({ variantClassName }: HomeGradientVariantProps) {
  return (
    <div className={`home-gradient-variant ${variantClassName}`}>
      <HomePage />
    </div>
  );
}

export function MainHomePageApricotLight() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--logo-apricot-light" />;
}

export function NewHomePageV5AdobeDusk() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--adobe-dusk" />;
}

export function NewHomePageV6RioGrande() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--rio-grande" />;
}

export function NewHomePageV7SageHorizon() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--sage-horizon" />;
}

export function NewHomePageV8TurquoiseClay() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--turquoise-clay" />;
}

export function NewHomePageV9SandstoneDawn() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--sandstone-dawn" />;
}

export function NewHomePageV10LogoEmber() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--logo-ember" />;
}

export function NewHomePageV11LogoSignal() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--logo-signal" />;
}

export function NewHomePageV12LogoHorizon() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--logo-horizon" />;
}

export function NewHomePageV13LogoSolar() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--logo-solar" />;
}

export function NewHomePageV14LogoMarigold() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--logo-marigold" />;
}

export function NewHomePageV15LogoSunburst() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--logo-sunburst" />;
}

export function NewHomePageV16LogoMesaGold() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--logo-mesa-gold" />;
}

export function NewHomePageV17LogoApricotLight() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--logo-apricot-light" />;
}

export function NewHomePageV18LogoCreamsicleLight() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--logo-creamsicle-light" />;
}

export function NewHomePageV19LogoHoneyLight() {
  return <HomeGradientVariant variantClassName="home-gradient-variant--logo-honey-light" />;
}
