import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../../components/Card/Card';
import PeacefulBG from '../../assets/images/peaceful.jpg';
import GameBG from '../../assets/images/games/win.jpeg';
import PlayBG from '../../assets/images/games/play.png';
import ReferBG from '../../assets/images/refer.png';
import ClaimsBG from '../../assets/images/claims.png';
import ILPBG from '../../assets/images/ilp.png';
import PortfolioBG from '../../assets/images/portfolio.png';
import { black, grey, lightGrey, red } from '../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WalletLandingScene = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: grey,
    },
    scrollView: {
      flex: 1,
      paddingTop: 200,
    },
    bgImage: {
      position: 'absolute',
      height: '100%',
      top: 0,
      left: 0,
    },
    bgCard: {
      backgroundColor: lightGrey,
      borderRadius: 30,
      marginBottom: 200,
    },
    longCard: {
      backgroundColor: lightGrey,
      borderColor: grey,
      borderWidth: 1,
      padding: 5,
      marginVertical: 10,
      marginHorizontal: 10,
      flexDirection: 'row',
      marginBottom: 30,
    },
    rewardsSection: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignContent: 'space-around',
    },
    smallCard: {
      padding: 5,
      margin: 15,
      marginBottom: 30,
      width: '40%',
    },
    cardBG: {
      height: 80,
    },
    cardText: {
      alignSelf: 'center',
      fontSize: 16,
      fontWeight: '500',
      color: black,
    },
  });
  return (
    <View style={styles.container}>
      <Image source={PeacefulBG} style={styles.bgImage} />
      <ScrollView overScrollMode="never" style={styles.scrollView}>
        <Card style={styles.bgCard}>
          <View
            style={{
              backgroundColor: black,
              height: 1,
              marginBottom: 5,
              marginTop: -10,
              marginHorizontal: 180,
            }}
          />
          <Card
            style={styles.longCard}
            onPress={() => navigation.navigate('PaymentHistory')}>
            <Icon name="history" size={30} />
            <View style={{ marginLeft: 30 }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>
                Paid Pulse Subscription
              </Text>
              <Text style={{ fontSize: 12, fontWeight: '400' }}>
                Paid S$ 3.00 - 20 Mar 20:30
              </Text>
            </View>
          </Card>
          <Text>Rewards</Text>
          <View style={styles.rewardsSection}>
            <Card
              style={styles.smallCard}
              onPress={() => navigation.navigate('WalletGames')}>
              <ImageBackground source={PlayBG} style={styles.cardBG} />
              <Text style={styles.cardText}>Game Center</Text>
              <Text
                style={[
                  styles.cardText,
                  { fontSize: 10, fontWeight: 'normal' },
                ]}>
                Earn as you play
              </Text>
            </Card>

            <Card style={styles.smallCard}>
              <ImageBackground source={ReferBG} style={styles.cardBG} />
              <Text style={styles.cardText}>Refer friends</Text>
              <Text
                style={[
                  styles.cardText,
                  { fontSize: 10, fontWeight: 'normal' },
                ]}>
                Earns with your friends
              </Text>
            </Card>

            <Card
              style={styles.smallCard}
              onPress={() => navigation.navigate('WalletGames')}>
              <ImageBackground source={GameBG} style={styles.cardBG} />
              <Text style={styles.cardText}>Offers</Text>
              <Text
                style={[
                  styles.cardText,
                  { fontSize: 10, fontWeight: 'normal' },
                ]}>
                Updated weekly
              </Text>
            </Card>
          </View>

          <Text>Payments</Text>
          <View style={styles.rewardsSection}>
            <Card
              style={styles.smallCard}
              onPress={() => navigation.navigate('WalletGames')}>
              <ImageBackground source={ClaimsBG} style={styles.cardBG} />
              <Text style={styles.cardText}>Submit Claims</Text>
              <Text
                style={[
                  styles.cardText,
                  { fontSize: 10, fontWeight: 'normal' },
                ]}>
                Pru Panel and Outpatient
              </Text>
            </Card>
          </View>

          <Text>Investment</Text>
          <View style={styles.rewardsSection}>
            <Card
              style={styles.smallCard}
              onPress={() => navigation.navigate('WalletGames')}>
              <ImageBackground source={PortfolioBG} style={styles.cardBG} />
              <Text style={styles.cardText}>Portfolio</Text>
              <Text
                style={[
                  styles.cardText,
                  { fontSize: 10, fontWeight: 'normal' },
                ]}>
                FNA / Risk assessments
              </Text>
            </Card>
            <Card
              style={styles.smallCard}
              onPress={() => navigation.navigate('WalletGames')}>
              <ImageBackground source={ILPBG} style={styles.cardBG} />
              <Text style={styles.cardText}>ILPs</Text>
              <Text
                style={[
                  styles.cardText,
                  { fontSize: 10, fontWeight: 'normal' },
                ]}>
                Investment-linked Plans
              </Text>
            </Card>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

export default WalletLandingScene;
