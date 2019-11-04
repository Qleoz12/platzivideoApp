import React from  'react';
import 
{
	View,
	Text,
	Image,
	StyleSheet
} from  'react-native';

function Header(props)
{
	return(
		<View>
			<View style={styles.container}>
				<Image
					source={require('../../../assets/logo.png')}
					style={styles.logo}
				/>
			</View>
			<View>
				{props.children}
			</View>
		</View>
		)
}

const styles= StyleSheet.create({
	logo:
	{
		width: 80,
		height:23,
		resizeMode: 'contain',
	},
	container:
	{
		paddingHorizontal:15,
		paddingVertical:20,
	}
})

export default Header;