import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PaginationDot, MultiSelectOptionsWithSearch } from '../components/StepComponents';

const Step2 = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <PaginationDot current={2} />
            <View style={{ flex: 0.9, paddingHorizontal: 20, paddingVertical: 20, marginHorizontal: 20, marginVertical: 5, backgroundColor: 'skyblue', borderRadius: 10 }}>
                <View style={{ paddingVertical: 15 }}>
                    <Text style={{ color: 'black', paddingBottom: 20 }}>What is the reason visit for your visit?</Text>
                    <MultiSelectOptionsWithSearch placeholder='Search for reason or choose below' list={['Cold', 'Cough', 'COVID', 'Influenze (Flu)', 'Nasal Congestion', 'Sore throat', 'Urinary Tract Infection (UTI)', 'Prescription Refill']} />
                </View>
            </View>
            <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ width: '50%', borderRadius: 20, alignItems: 'center', backgroundColor: 'purple', paddingVertical: 10 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold' }}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Step2;