import Grid from 'react-css-grid';


function GameBoard(props) {
	return (
		<Grid width={12} gap={24}>
			{props.children}
		</Grid>
	)
}

export default GameBoard
