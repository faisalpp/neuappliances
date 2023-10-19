import React,{useState} from 'react'
import { Radio, Typography } from "@material-tailwind/react";
import RadioSvg from '../../../svgs/RadioSvg';
import { FaLock } from 'react-icons/fa';
import CustomInput from '../../Reusable/CustomInput';
import TextInput from '../../TextInput/TextInput';

const PaymentRadio = ({ id, title, labelImage, checked, name, customStyle,change}) => {
    return (
        <div className='flex justify-between w-full gap-3 p-4'>
            <Radio id={id} onChange={(e)=>change(e)} icon={<RadioSvg className="w-[18px] h-[18px]" />} className='border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]' ripple={false} name={name} label={
                <div>
                    <Typography className="font-medium tracking-032 flex items-center gap-1 text-sm text-b16">
                        {
                            labelImage ?
                                <img src={'/payment/' + labelImage} className='h-[23px] object-contain' alt={title} />
                                : null
                        }
                        <span className={customStyle}>
                            {title}
                        </span>
                    </Typography>
                </div>
            } checked={checked} />
        </div>
    )
}

const PaymentRadio2 = ({ id, title, labelImage, checked, name, customStyle,change}) => {
    return (
        <div className='flex justify-between w-full gap-3 p-4'>
            <Radio id={id} onChange={(e)=>change(e)} icon={<RadioSvg className="w-[18px] h-[18px]" />} className='border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]' ripple={false} name={name} label={
                <div>
                    <Typography className="font-medium tracking-032 flex items-center gap-1 text-sm text-b16">
                        {
                            labelImage ?
                                <img src={'/payment/' + labelImage} className='h-[23px] object-contain' alt={title} />
                                : null
                        }
                        <span className={customStyle}>
                            {title}
                        </span>
                    </Typography>
                </div>
            } checked={checked===name?true:false} />
        </div>
    )
}

const PaymentMethod = ({payment,setPayment,setBilling,billing,card,setCard,cardErrors}) => {

    const [sameAddress,setSameAddress] = useState(true)

    const handleBilling = (e) => {
      const value = e.target;
      if(value.name === 'shipping_address'){
         setSameAddress(value.checked)
         setBilling(false)
      }
      if(value.name === 'billing_address'){
          setBilling(value.checked)
          setSameAddress(false)
      }
    }

    const handlePaymentMod = (e) => {
      setPayment(e.target.name)
    }

    const addSpacesToCreditCardNumber = (creditCardNumber) => {
        // First, remove any existing spaces from the credit card number
        const trimmedNumber = creditCardNumber.replace(/\s/g, '').slice(0, 16);
        // Then, add a space after every 4 characters
        const formattedNumber = trimmedNumber.replace(/\d{4}(?!$)/g, '$& ');
        return formattedNumber;
      };
      const addSlashesToNumber = (number) => {
        const trimmedNumber = number.replace(/[^0-9]/g, '').slice(0, 6);
        let formattedNumber = '';
        for (let i = 0; i < trimmedNumber.length; i += 2) {
          if (i !== 0) {
            formattedNumber += '/';
          }
          formattedNumber += trimmedNumber.substr(i, 2);
        }
        return formattedNumber;
      };

    return (
        <div>
            {/* Payment */}
            <div className='space-y-14px mt-8'>
                <h3 className='text-lg font-medium text-b16'>Payment</h3>
                <p className='flex gap-1 items-center text-sm text-b32 font-medium'>
                    <FaLock className='text-b3 text-xs' /> All transactions are secure and encrypted.
                </p>
                <div className='[&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md'>
                    <PaymentRadio2 customStyle="font-medium" change={handlePaymentMod} name="card_payment" id="credit_card" title="Credit card" checked={payment} />
                    <div className='p-4 bg-[#F9F9F9] grid grid-cols-1 gap-14px'>
                    <TextInput icon="lock.webp" width="full" name="cardNumber" iscompulsory="false" type="text" value={addSpacesToCreditCardNumber(card.cardNo)} onChange={(e)=>setCard({...card,cardNo:card.cardNo.length > 15 ? card.cardNo.replace(/\s/g, '').slice(0, 16) : e.target.value.replace(/\s/g, '').slice(0, 16)})} error={cardErrors && cardErrors.includes('Card Number is Required!') ? true : false} errormessage="Card Number is Required!" placeholder="Card number" />
                    <TextInput width="full" name="cardName" iscompulsory="false" type="text" value={card.name} onChange={(e)=>setCard({...card,name:e.target.value})} error={cardErrors && cardErrors.includes('Card Holder Name is Required!') ? true : false} errormessage="Card Holder Name is Required!" placeholder="Name on card" />
                        <div className='grid grid-cols-2 gap-14px'>
                         <TextInput width="full" name="expDate" iscompulsory="false" type="text" value={card.expDate} onChange={(e)=>setCard({...card,expDate:addSlashesToNumber(e.target.value)})} error={cardErrors && cardErrors.includes('Card Expiry Date is Required!') ? true : false} errormessage="Card Expiry Date is Required!" placeholder="Expiration date (MM / YY)" />
                         <TextInput icon="question-fill.webp" width="full" name="code" iscompulsory="false" type="text" value={card.code} onChange={(e)=>setCard({...card,code:card.code.length > 6 ?card.code :e.target.value})} error={cardErrors && cardErrors.includes('Security Code is Required!') ? true : false} errormessage="Security Code is Required!" placeholder="Security code" />
                        </div>
                    </div>
                    <PaymentRadio2 name="paypal_payment" change={handlePaymentMod} checked={payment} labelImage="pay_paypal.webp" id="paypal" />
                    <PaymentRadio2 name="affirm_payment" change={handlePaymentMod} checked={payment} id="affirm" labelImage="affirm.webp" />
                </div>
            </div>
            {/* Billing Address */}
            <div className='mt-8'>
                <h3 className='text-lg font-medium text-b16'>Billing address</h3>
                <p className='flex gap-1 items-center text-sm text-b32'>
                    Select the address that matches your card of payment method.
                </p>
                <div className='mt-14px [&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md'>
                    <PaymentRadio checked={sameAddress} change={handleBilling} name="shipping_address" id="shipping_address" title="Same as shipping address"  />
                    <PaymentRadio checked={billing} change={handleBilling}  name="billing_address" id="billing_address" title="Use a different billing address" />
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod