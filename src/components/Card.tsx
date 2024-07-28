import '../App.css'
// Define props for the Card component
interface CardProps {
  image?: string; // Optional image prop
  title: string;  // Required title prop
  text: string;   // Required text prop
  link: string;   // Required link prop
  children?: React.ReactNode; // Optional children for additional content
}

const Card: React.FC<CardProps> = ({ image, title, text, link, children }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      {children}
      <a href={link} className="card-button">
        Перейти
      </a>
    </div>
  );
};

export default Card;
