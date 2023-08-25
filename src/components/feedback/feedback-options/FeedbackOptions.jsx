import { Button } from '../feedback-options/feedbackOptions.styled';
import { ButtonContainer } from '../feedback-options/feedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => {
            onLeaveFeedback(option)
          }}
        >
          {option}
        </Button>
      ))}
    </ButtonContainer>
  );
};
