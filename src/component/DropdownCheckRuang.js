import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const DropdownCheckRuang = ({ name, value, setValue }) => {
  const data = [
    { label: `Volume ${name}`, value: '1' },
    { label: `Luas Permukaan ${name}`, value: '2' },
  ];

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      // search
      maxHeight={300}
      className="min-w-full"
      labelField="label"
      valueField="value"
      placeholder="Ingin Menghitung Apa?"
      // searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default DropdownCheckRuang;
