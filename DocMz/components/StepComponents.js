import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { Icon } from 'native-base';

WIDTH = Dimensions.get('window').width;

export const PaginationDot = ({ current }) => {
    Pages = [1, 2, 3, 4, 5];
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20 }}>
            {Pages.map((item, index) => {
                return (
                    <View key={index} style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{ padding: 3, backgroundColor: item == current ? 'purple' : 'gray', borderRadius: 10 }}></View>
                    </View>
                )
            })}
        </View>
    )
}

export const MultiSelectOptions = ({ list }) => {
    const [option, setOption] = useState([]);

    _doAdd = (item) => {
        var arr = [...option];

        index = option.findIndex(function (element) {
            return element == item;
        });

        if (index != -1) {
            arr.splice(index, 1);
        } else {
            arr.push(item);
        }

        setOption(arr);
    }

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {list.map((item, index) => {
                found = option.find(function (element) {
                    return element == item;
                });
                return (
                    <TouchableOpacity key={index} style={{ backgroundColor: found ? 'purple' : 'transparent', width: '30%', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: 'gray', paddingVertical: 5, margin: '1.5%' }} onPress={() => this._doAdd(item)}>
                        <Text style={{ color: found ? 'white' : 'black' }}>{item}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export const TextBoxContainer = ({ placeholder, type = 'Normal' }) => {
    const [textBox, setTextBox] = useState(type == 'NumberUpDown' ? 0 : '');

    _doUp = () => {
        setTextBox(parseInt(textBox) + 1);
    }

    _doDown = () => {
        setTextBox(parseInt(textBox) - 1 < 0 ? 0 : parseInt(textBox) - 1);
    }

    return (
        <View style={{ justifyContent: 'center' }}>
            <TextInput
                value={textBox.toString()}
                style={{ height: 40, backgroundColor: 'white', borderRadius: 5, paddingLeft: 15 }}
                placeholder={placeholder}
                keyboardType={type == 'NumberUpDown' ? 'number-pad' : 'default'}
                onChangeText={value => setTextBox(value)}
            />
            {type == 'NumberUpDown' &&
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 5 }}>
                    <TouchableOpacity onPress={() => _doUp()}>
                        <Icon name='circle-with-plus' type='Entypo' style={{ color: 'gray' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _doDown()}>
                        <Icon name='circle-with-minus' type='Entypo' style={{ color: 'gray' }} />
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export const MultiSelectOptionsWithSearch = ({ placeholder, list }) => {
    const [textBox, setTextBox] = useState('');
    const [option, setOption] = useState([]);
    const [searchList, setSearchList] = useState(list);

    _doAdd = (item) => {
        var arr = [...option];

        index = option.findIndex(function (element) {
            return element == item;
        });

        if (index != -1) {
            arr.splice(index, 1);
        } else {
            arr.push(item);
        }

        setOption(arr);
    }

    _doSearch = (value) => {
        setTextBox(value);

        var searchData = [];
        var searchText = value.trim().toLowerCase();

        searchData = list.filter(item => {
            return item.toLowerCase().match(searchText);
        });

        setSearchList(searchData);
    }

    return (
        <View>
            <View style={{ justifyContent: 'center' }}>
                <TextInput
                    value={textBox.toString()}
                    style={{ height: 40, backgroundColor: 'white', borderRadius: 5, paddingLeft: 15 }}
                    placeholder={placeholder}
                    onChangeText={value => this._doSearch(value)}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 10 }}>
                    <Icon name='search' type='Feather' style={{ color: 'gray', fontSize: 20 }} />
                </View>
            </View>
            <View style={{ paddingVertical: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
                {searchList.map((item, index) => {
                    found = option.find(function (element) {
                        return element == item;
                    });
                    return (
                        <TouchableOpacity key={index} style={{ backgroundColor: found ? 'purple' : 'transparent', paddingHorizontal: 5, alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: 'gray', paddingVertical: 5, margin: '1.5%' }} onPress={() => this._doAdd(item)}>
                            <Text style={{ color: found ? 'white' : 'black' }}>{item}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

export const MultiSelectOptionsWithDropDown = ({ list }) => {
    var keyArr = [];
    list.forEach(element => {
        keyArr.push({...element, data:[]});
    });
    const [selectedOption, setSelectedOption] = useState(keyArr);
    const [optionOpen, setOptionOpen] = useState([]);
    
    _doAddOpen = (key) => {
        var arr = [...optionOpen];

        index = optionOpen.findIndex(function (element) {
            return element == key;
        });

        if (index != -1) {
            arr.splice(index, 1);
        } else {
            arr.push(key);
        }

        setOptionOpen(arr);
    }

    _doAddOptions = (index, item) => {
        var arr = [...selectedOption];

        foundIndex = selectedOption[index].data.findIndex(function (element) {
            return element == item;
        });

        if (foundIndex != -1) {
            arr[index].data.splice(index, 1);
        } else {
            arr[index].data.push(item);
        }
        setSelectedOption(arr);
    }

    return (
        <View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {list.map((item, index) => {
                    found = optionOpen.find(function (element) {
                        return element == item.key;
                    });
                    
                    return (
                        <View key={index}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'purple', paddingHorizontal: 10, alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: 'gray', paddingVertical: 5, margin: '1%' }} onPress={() => this._doAddOpen(item.key)}>
                                    <Text style={{ color: 'white' }}>{item.key}</Text>
                                    <Icon name={found ? 'chevron-small-up' : 'chevron-small-down'} type='Entypo' style={{ color: 'white', marginLeft: 5 }} />
                                </TouchableOpacity>
                            </View>
                            {found &&
                                <View style={{ paddingTop: 8, paddingBottom: 15, width: WIDTH - 80 }}>
                                    {item.data.map((innerItem, innerIndex) => {
                                        innerFound = selectedOption[index].data.find(function (element) {
                                            return element == innerItem;
                                        });
                                        return (
                                            <TouchableOpacity key={innerIndex} style={{ paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }} onPress={() => this._doAddOptions(index, innerItem)}>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={{ color: 'black' }}>{innerItem}</Text>
                                                </View>
                                                <Icon name={innerFound ? 'md-checkmark-circle-outline' : 'circle-thin'} type={innerFound ? 'Ionicons' : 'FontAwesome'} style={{ color: innerFound ? 'purple' : 'gray', fontSize: 20 }} />
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            }
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
