import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import './Pricing.css'

class Pricing extends React.Component {
    render(){
        return (
            <div className="pricingdiv" style={{padding: 40, paddingBottom:45}}>
                <div style={{padding: 5}}>
                {/* <div> */}
                    <center>We are offering the following package</center>
                </div>
          
                <PricingTable  highlightColor='##f44336'>
                    
                    <PricingSlot highlighted onClick={this.submit} buttonText='SELECT' title='Studio Rental' priceText='$100/hour'>
                        <PricingDetail> <b>15</b> photo</PricingDetail>
                        <PricingDetail> <b>5 GB</b> storage</PricingDetail>
                        <PricingDetail> <b>1</b> usb</PricingDetail>
                        <PricingDetail> <b>Multiple background Colors</b></PricingDetail>
                    </PricingSlot>
                    <PricingSlot highlighted onClick={this.submit} buttonText='SELECT' title='Wedding Video' priceText='$3000/FullDay'>
                        <PricingDetail> <b>35</b> projects</PricingDetail>
                        <PricingDetail> <b>15 GB</b> storage</PricingDetail>
                        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                        <PricingDetail> <b>Time tracking</b></PricingDetail>
                    </PricingSlot>
                    <PricingSlot  highlighted onClick={this.submit} buttonText='SELECT' title='Musical Video' priceText='$799/hour'>
                        <PricingDetail> <b>100</b> projects</PricingDetail>
                        <PricingDetail> <b>30 GB</b> storage</PricingDetail>
                        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                        <PricingDetail> <b>Time tracking</b></PricingDetail>
                    </PricingSlot>
                    <PricingSlot  highlighted onClick={this.submit} buttonText='SELECT' title='Publicitary video' priceText='$200/month'>
                        <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
                        <PricingDetail> <b>75 GB</b> storage</PricingDetail>
                        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                        <PricingDetail> <b>Time tracking</b></PricingDetail>
                    </PricingSlot>
                </PricingTable>
                
                {/* <PricingTable  highlightColor='#1976D2'>
                    <PricingSlot  highlighted onClick={this.submit} buttonText='SELECT' title='Studio Rental' priceText='$100/hour'>
                            <PricingDetail> <b>15</b> photo</PricingDetail>
                            <PricingDetail> <b>5 GB</b> storage</PricingDetail>
                            <PricingDetail> <b>1</b> usb</PricingDetail>
                            <PricingDetail> <b>Multiple background Colors</b></PricingDetail>
                    </PricingSlot>
                    <PricingSlot highlighted onClick={this.submit} buttonText='SELECT' title='Wedding Video' priceText='$3000/FullDay'>
                        <PricingDetail> <b>35</b> projects</PricingDetail>
                        <PricingDetail> <b>15 GB</b> storage</PricingDetail>
                        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                        <PricingDetail> <b>Time tracking</b></PricingDetail>
                    </PricingSlot>
                    <PricingSlot  highlighted onClick={this.submit} buttonText='SELECT' title='Musical Video' priceText='$799/hour'>
                        <PricingDetail> <b>100</b> projects</PricingDetail>
                        <PricingDetail> <b>30 GB</b> storage</PricingDetail>
                        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                        <PricingDetail> <b>Time tracking</b></PricingDetail>
                    </PricingSlot>
                    <PricingSlot  highlighted onClick={this.submit} buttonText='SELECT' title='Publicitary video' priceText='$200/month'>
                        <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
                        <PricingDetail> <b>75 GB</b> storage</PricingDetail>
                        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                        <PricingDetail> <b>Time tracking</b></PricingDetail>
                    </PricingSlot>
                </PricingTable> */}
            </div>
        )
    }
}

export default Pricing