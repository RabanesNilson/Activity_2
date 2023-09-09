import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GigaPay</Text>
        <View style={styles.subheader}></View>
      </View>
      <View style={styles.content}>
        <Image
          source={{
            uri:
              'https://smart.com.ph/About/images/default-source/test/gigapay33a57e4b34e16513a17dff0000c1cb1e.png?sfvrsn=0&MaxWidth=500&MaxHeight=&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments&Signature=946CB267EC1336B48B953FB995E0DAFA',
          }}
          style={styles.logo}
        />
        <Text style={styles.balanceText}>GigaPay lets you pay with just a swipe!</Text>
        <Image
          source={{
            uri:
              'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/91/2b/48/912b4885-85ac-356d-967d-17d110752b67/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png', // Replace with the URL of your desired image
          }}
          style={styles.additionalImage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2016/12/12/23/06/grey-1902876_640.png' }}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>GigaPoints</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEWpqan///+lpaXe3t6ysrLU1NT29vbX19ejo6P6+vqurq7p6em4uLjl5eWrq6vx8fHNzc3FxcW9vb3Hx8dcjjd6AAAE4ElEQVR4nO2d25KjMAwFHUEIhHvy//+6gSwZwILFgS10NOrH1BTlHoOxjSS7i3bc2Q3475ghPmaIjxniY4b4mCE+ZoiPGeLzaw3rMgIjDzDMmzglQJ7ZJsO6uafkIKGK7cepYdI6UL0e4hQnhldovxcVc6OODJMY3O/Vic2aYXl28w5hxTCC78AOqhcNo/Tsxh0ClUuGpQ5BR9GCYX12y46CeV+8DYuzW3YUqf+66A0bFaNMx4MfSxM1gtykpjN8nN2wo0iZF35nWGvpQmoZwc7wqcOQnP+meBtmFfv3FENRtBG/PHwZlkwXpkW58Pd4uEvL9CDf35i4y93zq/zpKzAu82akzOwVGZd7jyEzL0DGeevCVNU9+jK8en14dpMOxjcszm7SwfiG7NQHmN/Yh3R2kw6GMVz8xoEJM5Zqex/6hsx+FTKMoXOq7lPWkG5nN+tAWENHcZRoWSDyht0avzp72b6NRxMlXxniQOQeawMHvmEHFcsLIh2Ga4OjFkNHT+2GC/vBmgz5PX1VhgtbaJoMXazekK7aDV2l3pB7EnUZcttoygy5mChdhuSvM7QZMvE0ygyZqC9lhkzUlxliYYb4mCE+ZoiPGeJjhviYIT5miI8Z4mOG+JghPmaIjxniY4b4mCE+ZoiPGQqEwsKx72iG6b0p94bUSzak1fhtfEOKj8lHFmtI7UEJH1INFwJ+9RhyZclUGS5FpesxvB+YdCXSkM2ArKNbEEM6lEhDPyK9fFBwxdG0yKUaegGG0ZcVHfvIdomGs3j0pPi6iZ2iRMNpBhNXIWgzlEs0nI4zOytWFhINJ8VVdvVgfzGBhm4UjZ7svRbdBBqOS+WOCzoSdevhwIvRVaDhaEIzeggpvuZ1XTZVWHulG8Y/vw7DT9YElVoVbph/ZMZ3btDgI9zwU++wmqTChLxAhBsOv8xn4gHFOmUbJsNNOp+J+xXYFpFtOIj4C36/TuASsg2H581PZuJqPfKAGHrbptsLH5vhKfiGXs2L7dW5ZRt+ChzPa3Nl2y8m2/DymdLMcl9vWt4Wn5uRpp3IVz7mEW746at0UiwhpEa+cMOfYvGjzxhZ0MaUcMNRqfHhW1t2DbuYdMPxJgZR0bZx6FFNIg3HI2fAqMkj0nBSF+Gxs3lUSjScTNK+3/B+k0k0nNbR2aX4WngJNJzX+X3uOOUnzkQaprNJWhm4gziilvllxl/T3+LgreDuOkX33pFo6Mj/yJ1fH/H2vYsXVdy+5wgyDflAhSwJYfgviTQ89HgGmYb9EKHcsFovLKvA8LiDUsQaHlaQWq6h+xsPo9iw25/5R51neMPuIK7ieQs52pk5pVO2oetj2QMivdAi2YMBzEYIxAzxMUN8zBAfM8THDPExQ3zMEB8zxMcM8TFDfMwQHzPExwzxMUN8zBAfM8TnFxgy567trMogDGIiFQIyTgFIPcGLy1QZMqfJuqAsIulwJcLc3vIoophHiL8NQ3LdpDNPxXwbXvS8L5h3RW8YkN0uGz48vDOslXQiX8euP0BXyWDDRxW/jwjenQQnAPYh/Bji9yLdl+LCh2Oe671ZcOeyUs/15yDr6L4jR+xUKC1WMlDGR3WXbWjxRQmk1XM1cWF2GHldhgRVSyD/V6lT5rh1ZZghPmaIjxniY4b4mCE+ZoiPGeJjhvj8ASqMYwCCaNkuAAAAAElFTkSuQmCC' }}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>GigaPay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///+AgIB6enq9vb3GxsZ9fX2cnJx4eHjs7OysrKzQ0NCOjo6QkJB1dXX8/Pyurq6IiIjw8PDn5+fg4ODBwcHd3d2kpKSCWnziAAADcklEQVR4nO2ci3LaMBAAaxHXYLAJhPb/P7Vl6JHGQUYWetx5dn/A2smO5EOQHz8AAAAAAAAMcq69gMyMx+E41l5ETrYH17jDtvYy8tG7tmma1vW1F5KJcdc1N7rdKkvd7l0juP0KS+3btvmkbVdX6r3Q5l5q7SUlZfvuminufUWlfi10haV+K3RlpZ4eFPpZ6qn28l7ndsr7sH/6j0dfofdSbb+nnvb+Qu+l7g2X2ndzhd5L7ayWOnr30G+l2nxPvU5KoZicqB6f8t5S7Z3+u2GB35XB1um/pFDBVKnLChUMlRq8h04x8p66DTjlfZiY/eMKFQyUGl2ooLzUVwoVVJc6PymFoniiejophdIda6s8JEWhgspSwyalUPRNVM9n+aUom/1TFiqoKrUfUhYqtIOWUtMXKigpNWZSCkXFRJXmlPdR//QfF8/ySxnqfkqVYw+dUnVPfW1SCqXiRPXypBRKpYmqRKFClVLLFCpUKLVYoULhUh/dy+em6L1/2UKFgqXuyv8Bb7gypYbcemZTLHGbmvc99BkF3lOL76FTMu+pOSelULJOVHULFfKVmn9SCiXTRKWhUCFLqXVOeR/pT389hQqJS9VUqJC0VF2FCglLrX7K+0h0+pec5ZeSZPbXccr7SHD6Z/vEPhUv3qZqLlR4qVTdhQrxpea7U0pN5B1VzVl+KVGzf9p7+dwsv/e3U6iwsFRLhQqLSrWxh04J31PDv2OvjcDv/Fs45X0Enf46J6VQAiYqdbP8Up58599yocJsqX1juVChbbylmt1Dp3hm/xq3nrl4eJtqew+d8mBPXU2hwqTUNeyhU77sqTbfQ5/x33uquUkplH+fUm33Xeuh9gqD6YYb3Q13o22Ha6nnw08v+9orD8Ndrn+pcRxP5/P511/6vr9sNpvjbvf7MP9/qS429h+3mbWYY4OhDjDEUD8YYqgfDDHUD4YY6gdDDPWDIYb6wRBD/WCIoX4wxFA/GGKoHwwx1A+GGOoHQwz1gyGG+sEQQ/1giKF+MMRQPzUMfT/geIIdw73/JxyzRP6+o7yhe4t83lvk8zDEEEMMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxNCM4eBiGC6Rz7tEPi/e8OMtjg8jzwMAAAAAAAjmD4tcfBH0MBrIAAAAAElFTkSuQmCC' }}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={{ uri: 'https://static.thenounproject.com/png/3342411-200.png' }}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Pasa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={{ uri: 'https://icones.pro/wp-content/uploads/2021/04/icone-de-dossier-symbole-png-gris.png' }}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Accounts</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'left',
    marginTop: 80,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  subheader: {
    marginTop: 10,
    color: 'gray',
  },
  subheaderText: {
    fontSize: 18,
    color: 'gray',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 270,
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  additionalImage: {
    width: 200, // Adjust the width of the additional image as needed
    height: 200, // Adjust the height of the additional image as needed
    marginBottom: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
});