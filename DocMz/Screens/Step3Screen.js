import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { PaginationDot, MultiSelectOptionsWithDropDown } from '../components/StepComponents';

const Step3 = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <PaginationDot current={3} />
            <View style={{ flex: 0.9, paddingHorizontal: 20, paddingVertical: 20, marginHorizontal: 20, marginVertical: 5, backgroundColor: 'skyblue', borderRadius: 10 }}>
                <ScrollView contentContainerStyle={{ paddingVertical: 15 }}>
                    <Text style={{ color: 'black', paddingBottom: 20 }}>Do you have any of these symptoms?</Text>
                    <MultiSelectOptionsWithDropDown list={[{ key:'Few Symptoms', data: ['Cold', 'Cough', 'COVID', 'Influenze (Flu)', 'Nasal Congestion', 'Sore throat']}, { key: 'Gastrointestinal', data: ['Urinary Tract Infection (UTI)', 'Prescription Refill'] }]} />
                </ScrollView>
            </View>
            <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ width: '50%', borderRadius: 20, alignItems: 'center', backgroundColor: 'purple', paddingVertical: 10 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold' }}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Step3;