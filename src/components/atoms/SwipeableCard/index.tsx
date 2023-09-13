import Styles from "./_style.module.scss";

interface SwipeableCardProps {
  background: string;
  action: string;
  direction: 'left' | 'right'
}

const SwipeableCard = ({ background, direction, action }: SwipeableCardProps) => {
  const justifyContent = direction === 'left' ? 'start' : 'end';

  return (
    <div style={{ background, justifyContent }} className={Styles.container}>
      {action}
    </div>
  );
};

export default SwipeableCard;
