'use strict'

import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Alert, } from 'react-native';

export default class TalkCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    let showOrHideTalkInfo = this.props.showOrHideTalkInfo;
    let sites = this.props.sites;
    if (this.props.renderTime) {
			return(
				<TouchableWithoutFeedback onPress={() => this.props.showOrHideTalkInfo(this.props.talk)} >
					
					<View style={styles.TalkCardContainer}>
						<View styke={styles.TalCardColumn}>
							<View style={styles.TalkTimeContainer}>
								<Text style={styles.TalkText}> {this.props.talk.time} </Text>
							</View>
						</View>

						<View styke={styles.TalCardColumn}>
							<View style={styles.TalkTitleContainer}>
								<Text style={styles.TalkText}> {this.props.talk.title} </Text>
							</View>
							<View style={styles.TalkSiteContainer}>
								<Text style={[styles.TalkSiteText, {color: 'red'}]}> {this.props.talk.site} </Text>
							</View>
						</View>
					</View>

				</TouchableWithoutFeedback>
			);
    } else {
			return(
				<TouchableWithoutFeedback onPress={() => this.props.showOrHideTalkInfo(this.props.talk)} >
					<View style={styles.TalkCardContainer}>
						<View style={styles.TalkTimeContainer}>
							<Text style={styles.TalkText}>             </Text>
						</View>
						<View style={styles.TalkTitleContainer}>
							<Text style={styles.TalkText}> {this.props.talk.title} </Text>
						</View>
					</View>
				</TouchableWithoutFeedback>
			);
    }
		
	}
}

const styles = StyleSheet.create({
  TalkCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
	TalCardColumn: {
    flexDirection: 'column',
	},
	TalkTimeContainer: {
		margin: 10,
  },
	TalkTitleContainer: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 10,
		marginTop: 10,
		marginRight: 10,
		flexWrap: 'wrap',
		flexDirection: 'row',
		width: Dimensions.get('window').width - 82,
	},
	TalkSiteContainer: {
		flexWrap: 'wrap',
		paddingBottom: 10,
		flexDirection: 'row',
		width: Dimensions.get('window').width - 82,
	},
	TalkSiteText: {
		fontSize: 13,
	},
	TalkText: {
		fontSize: 17,
    color: '#4f4f4f',
	},
});
