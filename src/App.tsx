
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <div>
      <Card 
        image="https://www.google.com/logos/doodles/2024/paris-games-skateboarding-6753651837110523-2xa.gif" 
        title="Заголовок карточки" 
        text="Это текст карточки. А не лучше ли бросить это все и уйти в горы?"
        link="https://doodles.google/doodle/paris-games-skateboarding/"
      >
        {/* Additional elements can be added here if needed */}
      </Card>
    </div>
  );
};

export default App;
