import item1 from "../../images/item1.png";
import item2 from "../../images/item2.png";
import item3 from "../../images/item3.png";
import item4 from "../../images/item4.png";
import { FaDollarSign } from "react-icons/fa";

const foodItemsData = [
  {
    id: 1,
    imgSrc: item1,
    title: "low card pizza",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nemo sapiente consequatur ipsam officia aliquam.",
    cSymble: <FaDollarSign />,
    rate: "34",
  },
  {
    id: 2,
    imgSrc: item2,
    title: "pizza biscuit cake",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nemo sapiente consequatur ipsam officia aliquam.",
    cSymble: <FaDollarSign />,
    rate: "94",
  },
  {
    id: 3,
    imgSrc: item3,
    title: "crazzy crust pizza",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nemo sapiente consequatur ipsam officia aliquam.",
    cSymble: <FaDollarSign />,
    rate: "99",
  },
  {
    id: 4,
    imgSrc: item4,
    title: "Beer Pizza crust",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nemo sapiente consequatur ipsam officia aliquam.",
    cSymble: <FaDollarSign />,
    rate: "32",
  },
];

export default foodItemsData;
