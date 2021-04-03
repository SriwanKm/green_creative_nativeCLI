import React from 'react';
import {
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.borderContainer}>
          <LinearGradient
            colors={['#dbb637', '#f1e3b3']}
            style={styles.headerContainer}>
            <Text style={styles.mainHeader}>Green Creative</Text>
            <Text style={styles.subHeader}>
              Inspired by Creative Commons, licensed under Creative Commons.
            </Text>
          </LinearGradient>

          <View style={styles.navBar}>
            <LinearGradient colors={['#836b18', '#d7b336']} style={{flex: 1}}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flex: 1}}
                data={[
                  {key: 'home'},
                  {key: 'about'},
                  {key: 'portfolio'},
                  {key: 'prices'},
                  {key: 'products'},
                  {key: 'faq'},
                  {key: 'contact'},
                ]}
                renderItem={({item}) => (
                  <View style={styles.navItem}>
                    <TouchableOpacity>
                      <Text style={styles.navText}>{item.key}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </LinearGradient>
          </View>
          <View style={styles.section}>
            <LinearGradient
              colors={['#e9f0e8', '#ffffff']}
              style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>Template Usage</Text>
            </LinearGradient>
            <View style={styles.sectionDetails}>
              <Text style={styles.sectionDetailsText}>
                You may use this template on any site, anywhere, for free just
                please leave the link back to me in the footer. This template
                validates XHTML Strict 1.0, CSS Validates as well; enjoy :)
              </Text>
              <Text style={styles.sectionDetailsText}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Integer mi. Vivamus sit amet neque vitae sapien bibendum
                sodales. Curabitur elementum. Duis imperdiet. Donec eleifend
                porttitor sapien. Praesent leo. Quisque auctor velit sed tellus.
                Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec
                commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam
                lobortis risus ut felis. Sed vehicula pellentesque quam.x
              </Text>
              <TouchableOpacity>
                <Text style={styles.readMore}>(read more)</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.section}>
            <LinearGradient
              colors={['#e9f0e8', '#ffffff']}
              style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>
                Another Title Goes Here!
              </Text>
            </LinearGradient>
            <View style={styles.sectionDetails}>
              <Text style={styles.sectionDetailsText}>
                This particular template goes not have a naviagation panel; it
                was intended for simple sites. I am also making a version of
                this template with navigation, check out BryantSmith.com to get
                it.
              </Text>
              <TouchableOpacity>
                <Text style={styles.readMore}>(read more)</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <LinearGradient
              colors={['#e9f0e8', '#ffffff']}
              style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>Yet Another?</Text>
            </LinearGradient>
            <View style={styles.sectionDetails}>
              <Text style={styles.sectionDetailsText}>
                Each title is an H1 tag, so choose them carefully :)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67915a',
    padding: 20,
  },
  borderContainer: {
    flex: 1,
    borderColor: '#bfd3b7',
    borderWidth: 9,
    borderRadius: 50,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    padding: 18,
    paddingBottom: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  mainHeader: {
    color: '#293823',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeader: {
    color: '#67915a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  navBar: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  navText: {
    flex: 1,
    color: '#fafcf9',
    paddingVertical: 15,
    paddingHorizontal: 35,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  sectionHeader: {
    backgroundColor: '#ebf1ea',
    padding: 10,
    borderRadius: 30,
  },
  sectionDetails: {
    backgroundColor: '#ffffff',
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  sectionDetailsText: {
    fontSize: 15,
    lineHeight: 28,
    marginBottom: 18,
  },
  readMore: {
    fontSize: 14,
    marginTop: 20,
  },
  navItem: {
    flex: 1,
  },
});
export default App;
