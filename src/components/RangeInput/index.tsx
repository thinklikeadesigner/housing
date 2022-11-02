import React from 'react';

// type Props = {};

const RangeInput = ({value, changeRange}: any) => {
	return <div>
		<label htmlFor="cars">Set Min</label>
		<form onSubmit={() => console.log('this.handleChange')}>
			<label>
          Pick your favorite flavor:
				<select value={value} onChange={() => console.log('this.handleChange')}>
					<option value="grapefruit">Grapefruit</option>
					<option value="lime">Lime</option>
					<option value="coconut">Coconut</option>
					<option value="mango">Mango</option>
				</select>
			</label>
		</form>

	</div>;
};

export default RangeInput;
