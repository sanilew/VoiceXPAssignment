import { StatusBar } from 'expo-status-bar';
import {Alert,onPressHandler,TouchableWithoutFeedback,Button, TouchableOpacity,ScrollView, StyleSheet, Text, View,ImageBackground,Image ,TextInput,onChangeNumber,phoneNumber} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PhoneInput from "react-native-phone-number-input";
import RadioSelect from './assets/RadioSelect';
import { Link } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
// import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';
import DatePicker from 'react-native-datepicker';


export default function App() {

  const [profileInputName, setprofileInputName] = useState('');
  const [agentDetails, setagentDetail] = useState('');
  const [PANDetails, setaPANDetail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [textfirstName, setfirstName] = useState('');
  const [textlastName, setlasstName] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');
  const[dob,setDob]=useState(" ")
  const [adressLine1,setAddressline1]=useState(" ");
  const [addressLine2,setAddressline2=null ]=useState("")
  const [pinCode,setPincode]=useState(" ")
  const [city,setCity]=useState(" ")
  const [state,setState]=useState(" ")
  const [occupation,setOccupation]=useState(" ")
  const [date, setDate] = useState('31-12-2023');

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!profileInputName.trim()) {
      alert('Please Enter Profile Name');
      return;
    }

    //Check for the Email TextInput
    if (!agentDetails.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!PANDetails.trim()) {
      alert('Please PAN ');
      return;
    }
    if (!phoneNumber.trim()) {
      alert('Please Enter Contact Number');
      return;
    }
    if (!textfirstName.trim()) {
      alert('Please Enter First Name');
      return;
    }
    if (!textlastName.trim()) {
      alert('Please Enter Last Name');
      return;
    }
    if (!dob.trim()) {
      alert('Please Enter Date of Birth!');
      return;
    }
    if (!setAddressline1.trim()) {
      alert('Please Enter Adressline1');
      return;
    }
    if (!addressLine2.trim()) {
      alert('Please Enter Addressline2!');
      return;
    }
    if (!addressLine2.trim()) {
      alert('Please Enter Addressline2');
      return;
    }
    if (!pinCode.trim()) {
      alert('Please Enter Pincode');
      return;
    }
    if (!city.trim()) {
      alert('Please Enter City');
      return;
    }
    if (!state.trim()) {
      alert('Please Enter State name');
      return;
    }
    if (!occupation.trim()) {
      alert('Please choose Occupation!');
      return;
    }

    //Checked Successfully
    //Do whatever you want
    alert('Success');
  };


  
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  return (
    <ScrollView>
       <ImageBackground source={require("./assets/bg.png")} style={{bottom:10,width:380,height:1400,paddingLeft:35} }>
    <View style={{ paddingTop: 40}}>
          <View style={{backgroundColor:"#fff",height:2100,width:320,alignItems:"center"}}>
          <View style={{padding:5,paddingRight:40}}>
          <Image source={require("./assets/xp.png")}/>
          <Text style={{color:"#313C7E",fontSize:17}}>
            Personal Information
          </Text>
          </View>
          
      
        <View style={{width:200,paddingTop:10,height:500}}>
        <Text style={{ color:"#313C7E"}}>
    Agent Profile<Text style={{color:"red"}}>*</Text>
   
        </Text>
        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField=" "
        placeholder="Select Answer"
        searchPlaceholder="Search..."
        value={" "}
        onChange={item => {
          setValue( );
        }}
       
      />
      <Text style={{ color:"#313C7E"}}>
    Agent Details<Text style={{color:"red"}}>*</Text>
   
        </Text>
        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField=" "
        placeholder="Select Answer"
        searchPlaceholder="Search..."
        value={" "}
        onChange={item => {
          setValue( );
        }}
       
      />
        <Text style={{ color:"#313C7E"}}>
    PAN Details<Text style={{color:"red"}}>*</Text>
    </Text>
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={"Type here "}
        placeholder="Type Here"
       
      />
       <Text style={{ color:"#313C7E"}}>
    Email<Text style={{color:"red"}}>*</Text>
    </Text>
    <TextInput
        style={styles.input}
        onChangeText={
          (value) => setTextInputEmail(value)
        }
        value={" Type here"}
        placeholder="Type here"
       
      />
     
     <View style={{padding:10,left:-65}}>
     <PhoneInput defaultValue={phoneNumber} 
       onChangeText={
        (value) => setPhoneNumber(value)
      }
     />
     </View>
       <View style={{padding:10}}>
     <Text style={{ color:"#313C7E"}}>
    First Name<Text style={{color:"red"}}>*</Text>
    </Text>
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={" Type here"}
        placeholder="Type here"
       
      />
      <Text style={{ color:"#313C7E"}}>
    Last Name<Text style={{color:"red"}}>*</Text>
    </Text>
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={"Type here "}
        placeholder=""
       
      />
      </View>
      <View>
      <Text style={{color:"#313C7E" }}>
    Date of Birth<Text style={{color:"red"}}>*</Text>
   
        </Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
    
      <Text style={{color:"#313C7E" }}>
    Address line1<Text style={{color:"red"}}>*</Text>
   
        </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={" "}
        placeholder="Type here"
       
      />
      <Text style={{color:"#313C7E" }}>
      Address line2<Text style={{color:"red"}}>*</Text>
   
        </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={" "}
        placeholder="Type here"
       
      />
      <View style={{flexDirection:"row" }}>
      <Text style={{color:"#313C7E"}} >
    Pin Code<Text style={{color:"red"}}>*</Text>
   
        </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={" "}
        placeholder="Type here"
       
      />
      <Text style={{color:"#313C7E" }}>
    City<Text style={{color:"red"}}>*</Text>
   
        </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={" "}
        placeholder="Type here"
       
      />
      </View>
      <Text  style={{color:"#313C7E"}}>
    State<Text style={{color:"red"}}>*</Text>
   
        </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={" "}
        placeholder="Type here"
       
      />
    
    <Text style={{color:"#313C7E"}} >
    Occupation<Text style={{color:"red"}}>*</Text>
   
        </Text>
       
        <RadioSelect/>

        <Link to={{ screen: 'Profile', params: { id: 'jane' } }} style={{color:"#1E5E77"}}>
      Lorem Ipsum<Text style={{color:"red"}}>*</Text>
     
    </Link>
    <Text style={{color:"#313C7E"}}>Rate us</Text>
    <TouchableWithoutFeedback onPress={onPressHandler}>
<View style={{flexDirection:"row",columnGap:2}}>

{/* <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}> */}


{/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}> */}
<Text style={{fontSize:20, color:'white',padding:8,backgroundColor:'#fc6600'}}>1</Text>
<Text style={{fontSize:20, color:'white',padding:6,backgroundColor:'#f9a602'}}>2</Text>
<Text style={{fontSize:20, color:'white',padding:6,backgroundColor:'#c49102'}}>3</Text>
<Text style={{fontSize:20, color:'white',padding:5,backgroundColor:'#f9a602'}}>4</Text>
<Text style={{fontSize:20, color:'white',padding:5,backgroundColor:'#cc7722'}}>5</Text>
<Text style={{fontSize:20, color:'white',padding:5,backgroundColor:'#eb9605'}}>6</Text>
<Text style={{fontSize:20, color:'white',padding:5,backgroundColor:'#ef7215'}}>7</Text>
<Text style={{fontSize:20, color:'white',padding:5,backgroundColor:'#fc6600'}}>8</Text>
<Text style={{fontSize:20, color:'white',padding:5,backgroundColor:'#fda50f'}}>9</Text>
<Text style={{fontSize:20, color:'white',padding:4,backgroundColor:'#ff7417'}}>10</Text>
{/* </LinearGradient> */}

{/* </LinearGradient> */}
</View>
</TouchableWithoutFeedback>
    {/* <Rateus/> */}
    <Link to={{ screen: 'Profile', params: { id: 'jane' } }} style={{color:"#1E5E77"}}>
      Terms & Conditions<Text style={{color:"red"}}>*</Text> </Link>

       </View>
       <View style={{flexDirection:"row",gap:35,justifyContent:"center",padding:20} }>
<TouchableOpacity
          style={styles.button}
          onPress={() => navigate('')}
          underlayColor='#00ff'>
          <Text style={{borderWidth:7,borderColor:"#ffff",borderTopColor:"black",}}>CANCEL</Text>
 </TouchableOpacity>
 <Button
        title="Submit"
        onPress={checkTextInput}
        
        style={{ }}/> 
      </View>
      
        </View>
          
          </View>
           </View>
           </ImageBackground>
           </ScrollView>
           
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
