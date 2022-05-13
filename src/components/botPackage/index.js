import Icon1 from '../../images/warning.svg';
import Icon2 from '../../images/gaming.svg';
import Icon3 from '../../images/unicorn_edited.png';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesLink, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServicesElements";

export default function BotPackages() {
    return (
        <ServicesContainer id='botPackage'>
            <ServicesH1>BOT Package</ServicesH1>
            <ServicesWrapper>
                <ServicesCard data-aos="fade-right" data-aos-duration="600">
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Whale Alert</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lorem lectus.</ServicesP>
                </ServicesCard>
                <ServicesCard data-aos="fade-up" data-aos-duration="600">
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Minted Track</ServicesH2>
                    <ServicesP>Duis eu dolor posuere ipsum euismod eleifend ac vel diam.</ServicesP>
                </ServicesCard>
                <ServicesCard data-aos="fade-left" data-aos-duration="600">
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Celebrity Track</ServicesH2>
                    <ServicesP>Vestibulum consequat consequat sapien, at venenatis massa.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}
