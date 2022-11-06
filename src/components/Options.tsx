import React from 'react';
import QuizStyle from './Quiz.style';
import { clsx } from 'clsx';

const Options: React.FC<any> = (props: any) => {
	const classes = QuizStyle();
	const { updateSelected, options, answer, optionColor } = props;
	const [selectedOption, setSelectedOption] = React.useState<any>('');

	const selected = (event: any, option: any) => {
		updateSelected(option);
		setSelectedOption(option);
	};
	return (
		<div className={classes.optionsContainer}>
			{options.map((option: any, index: any) => {
				return (
					<div
						onClick={(e) => selected(e, option)}
						className={clsx(
							classes.option,
							optionColor === 'green' &&
								answer === option &&
								classes.optionTrue,
							optionColor === 'orange' &&
								selectedOption === option &&
								classes.optionSelected,
							optionColor === 'red' &&
								selectedOption === option &&
								selectedOption !== answer &&
								classes.optionFalse
						)}
						key={index}>
						{option}
					</div>
				);
			})}
		</div>
	);
};

export default Options;
