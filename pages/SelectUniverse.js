import { StyleSheet, Text, View, Image } from 'react-native';

const SelectUniverse = () => {
  return (
    <View style={styles.container}>
      <View style={styles.select_universe_wrap}>
        <Text style={styles.select_universe_text}>유니버스 선택</Text>
      </View>
      <View style={styles.universe_components_wrap}>
        <View style={styles.row}>
          <View style={styles.item_wrap}>
            <View style={styles.item_img_wrap}>
              <Image style={styles.item_img} />
            </View>
            <View style={styles.item_text_wrap}>
              <Text style={styles.item_text}>디즈니</Text>
            </View>
          </View>
          <View style={styles.item_wrap}>
            <View style={styles.item_img_wrap}>
              <Image style={styles.item_img} />
            </View>
            <View style={styles.item_text_wrap}>
              <Text style={styles.item_text}>마블</Text>
            </View>
          </View>
          <View style={styles.item_wrap}>
            <View style={styles.item_img_wrap}>
              <Image style={styles.item_img} />
            </View>
            <View style={styles.item_text_wrap}>
              <Text style={styles.item_text}>D.C.</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item_wrap}>
            <View style={styles.item_img_wrap}>
              <Image style={styles.item_img} />
            </View>
            <View style={styles.item_text_wrap}>
              <Text style={styles.item_text}>해리포터</Text>
            </View>
          </View>
          <View style={styles.item_wrap}>
            <View style={styles.item_img_wrap}>
              <Image style={styles.item_img} />
            </View>
            <View style={styles.item_text_wrap}>
              <Text style={styles.item_text}>지브리</Text>
            </View>
          </View>
          <View style={styles.item_wrap}>
            <View style={styles.item_img_wrap}>
              <Image style={styles.item_img} />
            </View>
            <View style={styles.item_text_wrap}>
              <Text style={styles.item_text}>포켓몬</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item_wrap}>
            <View style={styles.item_img_wrap}>
              <Image style={styles.item_img} />
            </View>
            <View style={styles.item_text_wrap}>
              <Text style={styles.item_text}>짱구</Text>
            </View>
          </View>
          <View style={styles.item_wrap}>
            <View style={styles.item_img_wrap}>
              <Image style={styles.item_img} />
            </View>
            <View style={styles.item_text_wrap}>
              <Text style={styles.item_text}>검정 고무신</Text>
            </View>
          </View>
          <View style={styles.item_wrap}>
            <View style={styles.item_img_wrap}>
              <Image style={styles.item_img} />
            </View>
            <View style={styles.item_text_wrap}>
              <Text style={styles.item_text}>둘리</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottom_box}></View>
    </View>
  );
};

export default SelectUniverse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
  select_universe_wrap: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    top: 20,
    height: 80,
  },
  select_universe_text: {
    fontSize: 20,
    fontWeight: 600,
  },
  universe_components_wrap: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: 'red',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  item_wrap: {
    width: 110,
    height: 150,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  item_img_wrap: {
    width: 110,
    height: 110,
    backgroundColor: 'gray',
    borderRadius: 15,
  },
  item_text_wrap: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  item_text: {
    fontWeight: 600,
    fontSize: 16,
  },

  bottom_box: {
    width: '100%',
    height: 100,
    backgroundColor: '#AEB4BF',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
