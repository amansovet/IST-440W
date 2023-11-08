import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Modal, Text, View, useWindowDimensions } from 'react-native';

const LocationScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [termsModal, setTermsModal] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Custom Color'] },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 70, paddingLeft: 16, paddingRight: 16 },
          dimensions.width
        )}
      >
        {/* App Name */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'System',
              fontSize: 40,
              fontStyle: 'italic',
              fontWeight: '700',
            },
            dimensions.width
          )}
        >
          {'Muscles'}
        </Text>
        {/* Tag Line */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              marginTop: 4,
            },
            dimensions.width
          )}
        >
          {'Exercise with style'}
        </Text>
        {/* Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 23,
              marginTop: 50,
            },
            dimensions.width
          )}
        >
          {'Location access required'}
        </Text>
        {/* Sub Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 13,
              lineHeight: 18,
              marginTop: 8,
              opacity: 0.5,
            },
            dimensions.width
          )}
        >
          {
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
          }
        </Text>
        {/* Give Location Access */}
        <Button
          onPress={() => {
            try {
              setTermsModal(true);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_5'],
              borderRadius: 28,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 17,
              height: 55,
              marginTop: 40,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Give Location Access'}
        />
      </View>

      <Modal animationType={'none'} transparent={true} visible={termsModal}>
        <View
          style={StyleSheet.applyWidth(
            { height: '100%', justifyContent: 'center' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color'],
                height: '100%',
                opacity: 0.7,
                position: 'absolute',
                top: 0,
                width: '100%',
              },
              dimensions.width
            )}
          />
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_3'],
                borderRadius: 16,
                justifyContent: 'center',
                marginLeft: 24,
                marginRight: 24,
                paddingBottom: 40,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 40,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  lineHeight: 20,
                  marginTop: 4,
                  opacity: 1,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    lineHeight: 18,
                    marginTop: 4,
                    opacity: 0.5,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'I agree to the '}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_5'],
                    lineHeight: 18,
                    marginTop: 4,
                    opacity: 1,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Terms of Service'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    lineHeight: 18,
                    marginTop: 4,
                    opacity: 0.5,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {' and '}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_5'],
                    lineHeight: 18,
                    marginTop: 4,
                    opacity: 1,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Conditions of Use'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    lineHeight: 18,
                    marginTop: 4,
                    opacity: 0.5,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {
                  ' including consent to electronic communications and I affirm that the information provided is my own.'
                }
              </Text>
              {null}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  marginTop: 20,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Touchable
                onPress={() => {
                  try {
                    setTermsModal(false);
                    navigation.navigate('UserInfoScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Custom Color_5'],
                      borderRadius: 20,
                      height: 46,
                      justifyContent: 'center',
                      paddingLeft: 25,
                      paddingRight: 25,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_2'],
                        fontFamily: 'Inter_500Medium',
                      },
                      dimensions.width
                    )}
                  >
                    {'Agree and continue'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setTermsModal(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginTop: 20, width: '40%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderRadius: 20,
                      height: 46,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_8'],
                        fontFamily: 'Inter_500Medium',
                      },
                      dimensions.width
                    )}
                  >
                    {'Disgree'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(LocationScreen);
