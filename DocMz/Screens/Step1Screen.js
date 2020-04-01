import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PaginationDot, MultiSelectOptions, TextBoxContainer } from '../components/StepComponents';

const Step1 = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <PaginationDot current={1} />
            <View style={{ flex: 0.9, paddingHorizontal: 20, paddingVertical: 20, marginHorizontal: 20, marginVertical: 5, backgroundColor: 'skyblue', borderRadius: 10 }}>
                <View style={{ paddingVertical: 15 }}>
                    <Text style={{ color: 'black', paddingBottom: 20 }}>What is the visit for?</Text>
                    <MultiSelectOptions list={['Me', 'Spouse', 'Child', 'Father', 'Mother', 'Other']} />
                </View>
                <View style={{ paddingVertical: 15 }}>
                    <Text style={{ color: 'black', paddingBottom: 20 }}>Where can this providercall you follow-up, if needed?</Text>
                    <TextBoxContainer placeholder='(+91) - 9494551439' />
                </View>
                <View style={{ paddingVertical: 15 }}>
                    <Text style={{ color: 'black', paddingBottom: 20 }}>Invite guest(s) to join your visit?</Text>
                    <TextBoxContainer placeholder='Optional.....' type='NumberUpDown' />
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

export default Step1;