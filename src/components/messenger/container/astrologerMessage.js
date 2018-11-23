import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Thumbnail } from 'native-base';
import StarRating from 'react-native-star-rating';
import { SCREEN_WIDTH } from '../../../config';


const renderStarRating = (starCount, onStartRatingPress) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ fontSize: 10, color: '#757575', margin: 5 }}>Rate this answer</Text>
      <StarRating
        fullStarColor="#DAA520"
        halfStarColor="#DAA520"
        containerStyle={{ width: 120 }}
        starSize={20}
        disabled={false}
        maxStars={5}
        rating={starCount}
        selectedStar={onStartRatingPress}
      />
    </View>
  );
};

class AstrologerMessage extends Component {

  state = { starCount: 2.5 };

  onStartRatingPress = (rating) =>  {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    const { starCount } = this.state;
    const { message } = this.props;
    return (
      <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
        <Thumbnail
          small
          source={{ uri: 'https://www.cyberastro.com/grfx/talk-to-astrologer.jpg' }}
          style={{ marginLeft: 5 }}
        />
        <View style={{ marginTop: 10, margin: 5 }}>
          <Text style={{ color: '#757575', fontSize: 10 }}>Fri Nov 23 2018 By Sandeep paudel</Text>
          <Text style={{
            backgroundColor: '#FFFFFF9F',
            flexGrow: 1,
            elevation: 1,
            padding: 10,
            maxWidth: SCREEN_WIDTH * 0.8,
            marginLeft: -5,
            shadowColor: '#fff',
            borderRadius: 15,
            borderTopLeftRadius: 0,
          }}
          >
            { message }
          </Text>
          { renderStarRating(starCount, this.onStartRatingPress) }
        </View>
      </View>
    );
  }
}
AstrologerMessage.propTypes = {
  message: PropTypes.string.isRequired,
}
export default AstrologerMessage;
