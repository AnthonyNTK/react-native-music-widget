import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import Sound from 'react-native-sound'
import Slider from 'react-native-slider'

import { shortToast, longToast } from './src/toast'
import { getTimeString } from './src/time'

import styles from './src/Styles'

const img_mute = require('./img/ic-mute.png')
const img_speaker = require('./img/ic-speaker.png')
const img_forward = require('./img/ic-forward.png')
const img_rewind = require('./img/ic-rewind.png')
const img_pause = require('./img/ic-pause.png')
const img_play = require('./img/ic-play.png')

export default class MusicWidget extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentTime: 0,
      displayTime: '0:00',
      volume: 1,
      status: false
    }

    this.tickInterval = null

    this.music = new Sound('music.mp3', this.props.url, (error) => {
      if (error) {
        longToast('Loading error, the file is either deleted or corrupted [' + error.toString() + ']')
        return
      }
    })

    this.tick = () => {
      this.music.getCurrentTime((seconds) => {
        if (this.tickInterval) {
          let duration = seconds / this.music.getDuration()
          let displayTime = getTimeString(seconds)
          this.setState({ currentTime: duration })
          this.setState({ displayTime: displayTime })
        }
      })
    }

    this.changeTime = value => {
      let time = value * this.music.getDuration()
      this.music.setCurrentTime(time)
    }

    this.changeVolume = value => {
      this.setState({volume: value})
      this.music.setVolume(value)
    }

    this.play = () => {
      this.tickInterval = setInterval(() => { this.tick() }, 100)
      this.setState({ status: true })
      this.music.play((success) => {
        if (success) {
          this.setState({ currentTime: 0 })
          this.setState({ status: false })
        }else {
          if (this.tickInterval) {
            clearInterval(this.tickInterval)
            this.tickInterval = null;
          }
          shortToast('Unexpected Error during play music')
          this.music.reset()
        }
      })
    }

    this.pause = () => {
      this.music.pause()
      this.setState({ status: false })
    }

    this.forward = () => {
      let newTime = this.state.currentTime + 0.02
      let newDuration = newTime * this.music.getDuration()
      this.music.setCurrentTime(newDuration)
      this.setState({ currentTime: newTime })
    }

    this.rewind = () => {
      let newTime = this.state.currentTime - 0.02
      let newDuration = newTime * this.music.getDuration()
      this.music.setCurrentTime(newDuration)
      this.setState({ currentTime: newTime })
    }

    this.muteSelection = volume => {
      if (volume == 0)
        return <Image style={styles.music} source={img_mute} />
      else
        return <Image style={styles.music} source={img_speaker} />
    }

    this.buttonSelection = status => {
      if (!status) {
        return (
          <TouchableOpacity onPress={this.play}>
            <Image style={styles.icon} source={img_play} />
          </TouchableOpacity>
        )
      }else {
        return (
          <TouchableOpacity onPress={this.pause}>
            <Image style={styles.icon} source={img_pause} />
          </TouchableOpacity>
        )
      }
    }
  }

  ComponentWillUnMount() {
    this.music.release()
    clearInterval(this.tickInterval)
    this.tickInterval = null
  }

  render() {
    const trackStyle = this.props.trackStyle ? this.props.trackStyle : {}
    const thumbStyle = this.props.thumbStyle ? this.props.thumbStyle : {}
    const thumbImage = this.props.thumbImage ? this.props.thumbImage : {}
    const thumbTintColor = this.props.thumbTintColor ? this.props.thumbTintColor : {}
    const thumbTouchSize = this.props.thumbTouchSize ? this.props.thumbTouchSize : {}

    return (
      <View style={styles.player}>
        <View style={styles.container}>

          {this.muteSelection(this.state.volume)}

          <Slider
            value={this.state.volume}
            onValueChange={value => this.changeVolume(value)}
            style={styles.volume}
            trackStyle={trackStyle}
            thumbStyle={thumbStyle}
            thumbImage={thumbImage}
            thumbTintColor={thumbTintColor}
            thumbTouchSize={thumbTouchSize} />
        </View>

        <View style={styles.bar}>
          <TouchableOpacity
            onPress={this.rewind}
            disabled={!this.state.status}>

            <Image
              style={this.state.status? styles.icon : styles.disable}
              source={img_rewind} />
          </TouchableOpacity>

          {this.buttonSelection(this.state.status)}

          <TouchableOpacity
            onPress={this.forward}
            disabled={!this.state.status}>

            <Image
              style={this.state.status? styles.icon : styles.disable}
              source={img_forward} />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.time}>{this.state.displayTime}</Text>

          <Slider
            value={this.state.currentTime}
            onValueChange={value => this.changeTime(value)}
            style={styles.slider}
            trackStyle={trackStyle}
            thumbStyle={thumbStyle}
            thumbImage={thumbImage}
            thumbTintColor={thumbTintColor}
            thumbTouchSize={thumbTouchSize} />
        </View>
      </View>
    )
  }
}

MusicWidget.propTypes = {
  url: PropTypes.string.isRequired
}
