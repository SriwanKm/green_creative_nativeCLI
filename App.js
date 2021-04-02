import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.borderContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.mainHeader}>Green Creative</Text>
            <Text style={styles.subHeader}>
              Inspired by Creative Commons, licensed under Creative Commons.
            </Text>
          </View>
          <ScrollView>
            <View style={styles.navBar}>
              <Text style={styles.navText}>home</Text>
              <Text style={styles.navText}>about</Text>
              <Text style={styles.navText}>portfolio</Text>
              <Text style={styles.navText}>prices</Text>
              <Text style={styles.navText}>products</Text>
              <Text style={styles.navText}>faq</Text>
              <Text style={styles.navText}>contact</Text>
            </View>
          </ScrollView>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>Template Usage</Text>
            </View>
            <View style={styles.sectionDetails}>
              <Text style={styles.sectionDetailsText}>
                You may use this template on any site, anywhere, for free just please leave the link back to me in the
                footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)
              </Text>
              <Text style={styles.sectionDetailsText}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae
                sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent
                leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo
                suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque
                quam.x
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>Another Title Goes Here!</Text>
            </View>
            <View style={styles.sectionDetails}>
              <Text style={styles.sectionDetailsText}>
                This particular template goes not have a naviagation panel; it was intended for simple sites. I am also
                making a version of this template with navigation, check out BryantSmith.com to get it.
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>Yet Another?</Text>
            </View>
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
    backgroundColor: "#67915a",
    padding: 20,
  },
  borderContainer: {
    flex: 1,
    borderColor: "#bfd3b7",
    borderWidth: 8,
    borderRadius: 10,
    backgroundColor: "blue",
  },
  headerContainer: {
    backgroundColor: "#dcb93e",
    padding: 10,
  },
  mainHeader: {
    color: "#293823",
    fontSize: 28,
    fontWeight: "bold",
  },
  subHeader: {
    color: "#67915a",
    fontWeight: "bold",
    fontSize: 16,
  },
  navBar: {
    backgroundColor: "#836b18",
    padding: 2,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  navText: {
    color: "#fafcf9",
    padding: 15,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#ffffff",
    padding: 14,
  },
  sectionHeader: {
    backgroundColor: "#ebf1ea",
    padding: 10,
    borderRadius: 30,
  },
  sectionDetails: {
    backgroundColor: "#ffffff",
  },
  sectionHeaderText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  sectionDetailsText: {
    fontSize: 15,
    lineHeight: 28,
    marginBottom: 18,
  },
});
export default App;
