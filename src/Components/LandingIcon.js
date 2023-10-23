import { ReactComponent as DottsSVG} from "../imgs/dotts.svg";
import { ReactComponent as FullDottsSVG } from "../imgs/full-dotts.svg";
import { ReactComponent as WaveSVG } from "../imgs/wave.svg";
import { ReactComponent as ConsultationSVG} from "../imgs/consultation.svg"; 
import { ReactComponent as DetailsSVG} from "../imgs/details-info.svg"; 
import { ReactComponent as EmergencyCareSVG} from "../imgs/emergency-care.svg"; 
import { ReactComponent as PharmacySVG} from "../imgs/pharmacy.svg"; 
import { ReactComponent as SearchSVG} from "../imgs/search.svg"; 
import { ReactComponent as TrackingSVG} from "../imgs/tracking.svg";
import { ReactComponent as DownArrowSVG} from "../imgs/down-arrow.svg";
import { ReactComponent as LeftArrowSVG} from "../imgs/left-arrow.svg";
import { ReactComponent as RightArrowSVG} from "../imgs/right-arrow.svg";
import { ReactComponent as CarouselDottsSVG} from "../imgs/carousel-dotts.svg";
import { ReactComponent as smallRightArrowSVG} from "../imgs/small-right-arrow.svg";
import { ReactComponent as ShapeSVG} from "../imgs/shape-2.svg";
import { ReactComponent as MobileMenuSVG} from "../imgs/mobile-menu.svg";


const iconTypes = {
    "dotts": DottsSVG,
    "fullDotts": FullDottsSVG,
    "wave": WaveSVG,
    "consultation": ConsultationSVG,
    "details": DetailsSVG,
    "emergencyCare": EmergencyCareSVG,
    "pharmacy": PharmacySVG,
    "search": SearchSVG,
    "tracking": TrackingSVG,
    "downArrow": DownArrowSVG,
    "leftArrow": LeftArrowSVG,
    "rightArrow": RightArrowSVG,
    "carouselDotts": CarouselDottsSVG,
    "smallRightArrow": smallRightArrowSVG,
    "shape": ShapeSVG,
    "mobileMenu": MobileMenuSVG
}

function LandingIcon({type, className, fill}) {
    const Icon = iconTypes[type];
    return <Icon className={className} style={{ fill: fill }} />
}

export { LandingIcon };
