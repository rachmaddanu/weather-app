import React, { Component } from 'react';
import { Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';
import CustomButton from './CustomButton';
import Card from './Card';
import CardSection from './CardSection';

const axiosprefix = 'http://api.openweathermap.org/data/2.5/weather?q=';
const APIkey = '&appid=54e4c492db1852353a903bd4d09d8060&units=metric';
const imgprefix = 'http://openweathermap.org/img/w/';
const imgend = '.png';
const today = new Date();
const date = `${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}`;

class WeatherComponents extends Component {
    state = { inputText: '', 
            alldata: '',
            namakota: '',
            cuaca: '',
            deskripsi: '',
            suhu: '',
            icon: '',
            tekanan: '',
            kelembaban: '',
            loading: false
            };

    renderLogic() {
        this.setState({ loading: true });
        axios.get(axiosprefix + this.state.inputText + APIkey)
        .then((response) => {
            //console.log(response.data)
            this.setState({ 
                alldata: response.data,
                namakota: response.data.name,
                cuaca: response.data.weather[0].main,
                deskripsi: response.data.weather[0].description,
                suhu: response.data.main.temp,
                icon: response.data.weather[0].icon,
                tekanan: response.data.main.pressure,
                kelembaban: response.data.main.humidity,
                loading: false
            });
        })
        .catch((error) => {
            this.setState({ loading: false})
            alert('Please enter a valid city name!')});       
    }

    buttonLogic(){
        if(this.state.loading) { 
            return (
                <ActivityIndicator
                    style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
                    size='large'
                />)
        } return (
            <CustomButton buttonPressed={this.renderLogic.bind(this)}> 
                Search
            </CustomButton>
        )
    }

    renderDetail() {
         if (this.state.alldata) {
            return (
                <Card>
                    <View>
                        <View>
                            <Text style={{ paddingLeft: 10, paddingTop: 5, fontSize: 20, fontWeight: '600' }}>{this.state.namakota}</Text>
                            <Text style={{ paddingLeft: 10, paddingTop: 1, fontWeight: '500' }}>{date}</Text>
                        </View>
                        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                            <Text style={{ paddingTop: 30, fontSize: 60 }}>{this.state.suhu}</Text>
                            <Text style={{ paddingTop: 30, fontSize: 20 }}>o</Text>
                            <Text style={{ paddingTop: 45, fontSize: 45 }}>C</Text>
                        </View>
                        <View style={{ alignItems: 'center'}}>
                            <Text style={{ fontSize: 20, fontWeight: '500' }}>{this.state.cuaca}</Text>
                            <Text style={{ fontSize: 20 }}>{this.state.deskripsi}</Text>
                            <Image
                                style={{ height: 50, width: 80}}
                                source={{ uri: imgprefix+this.state.icon+imgend }}
                            />
                        </View>
                        <View style={{ paddingLeft: 230, paddingTop: 40}}>
                            <Text style={{ fontWeight: '400' }}>Tekanan: {this.state.tekanan} Pa</Text>
                            <Text style={{ fontWeight: '400', paddingTop: 1, paddingBottom: 5 }}>Kelembaban: {this.state.kelembaban}</Text>
                        </View>
                    </View>
                </Card>
           ); 
        }
    }

    render() {
        // () => this.renderLogic() utk gantiin bind spy bisa akses parameter ke fungsi yg di tuju
        // kalau langsung this.renderLogic() kena bug, fungsi akan diakses berulang kali
        
        return (            
            <View>
                <Card>
                    <CardSection >
                        <TextInput
                            style={{ height: 40, flex: 1, padding: 5 }}
                            onChangeText={(text) => this.setState({ inputText: text })} 
                        />
                    </CardSection>

                    <View style={{ height: 50 }}>
                        {this.buttonLogic()}
                    </View>
                </Card>
                {this.renderDetail()}
            </View>
            
        );
    }
}

export default WeatherComponents;

{/* <Image
                                style={{ width: 70, height: 70 }}
                                source={{ uri: imgprefix + this.state.icon + imgend }}
                            /> */}