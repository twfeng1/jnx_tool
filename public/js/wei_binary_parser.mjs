

function readBigUInt64BE(offset) {
    // validateNumber(offset, 'offset');
    if (offset=== undefined){ offset=0};

    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined)
        boundsError(offset, this.length - 8);

    const hi = first * 2 ** 24 +
        this[++offset] * 2 ** 16 +
        this[++offset] * 2 ** 8 +
        this[++offset];

    const lo = this[++offset] * 2 ** 24 +
        this[++offset] * 2 ** 16 +
        this[++offset] * 2 ** 8 +
        last;

    return (BigInt(hi) << 32n) + BigInt(lo);
}

if (!Buffer.prototype.readBigUInt64BE) {  Buffer.prototype.readBigUInt64BE = readBigUInt64BE; }

//function buf2BigInt(buf){ return buf.readBigUInt64BE().toString(); }
function buf2BigInt(buf){ return buf.toString('hex'); }
function hexformatter(buf){ return buf.toString('hex'); }

class Parser  {

    constructor(callback) {
        this._pos =0;
        this._parseSequence = [];

    }
    parse(buf){
        // return this._parseSequence[0] (buf)
//        return  _.transform(this._parseSequence, (result,fnvalue,key)=>{ console.log(fnvalue.toString());var output=fnvalue(buf); result[output[0]]=output[1]; },{})

     //   return  _.transform(this._parseSequence, (result,fnvalue,key)=>{ var output=fnvalue(buf,result); result[output[0]]=output[1]; },{})
        return  _.transform(this._parseSequence, (result,fnvalue,key)=>{

            var output=fnvalue(buf,result);
            if( _.isEmpty(output[0]) && _.isObject(output[1])){   //if fieldname is blank AND fieldValue is object
              _.each(output[1],(v,k)=>{  result[k]=v;});
            }else{
                result[output[0]]=output[1];
            }


        },{})

    }


    /**
    buffer(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        this._parseSequence.push(
            (buf,resultobj)=>{
                if (_.has(opts,'length')) {

                   if (_.isFunction(opts.length))
                    {
                        let dynamic_length =opts.length(buf,resultobj);
                      // console.log("dynamic_length="+dynamic_length)
                        return   [fieldName.valueOf(), buf.slice(current_pos, current_pos + dynamic_length.valueOf())];
                    }else
                    {
                            return   [fieldName.valueOf(), buf.slice(current_pos, current_pos + opts.length.valueOf())];
                    }

                }else {
                    return  [fieldName.valueOf(), buf.slice(current_pos)]
                }
            }
        )
        this._pos=  (_.has(opts,'length'))?  this._pos + opts.length.valueOf() : -1;
        return this;
    }
**/

    buffer(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        this._parseSequence.push(
            (buf,resultobj)=>{
               let final_result;
                if (_.has(opts,'length')) {

                    if (_.isFunction(opts.length))
                    {
                        let dynamic_length =opts.length(buf,resultobj);
                        // console.log("dynamic_length="+dynamic_length)
                      //  return   [fieldName.valueOf(), buf.slice(current_pos, current_pos + dynamic_length.valueOf())];
                        final_result=   [fieldName.valueOf(), buf.slice(current_pos, current_pos + dynamic_length.valueOf())];

                    }else
                    {
                       // return   [fieldName.valueOf(), buf.slice(current_pos, current_pos + opts.length.valueOf())];
                        final_result=   [fieldName.valueOf(), buf.slice(current_pos, current_pos + opts.length.valueOf())];

                    }

                }else {
                   // return  [fieldName.valueOf(), buf.slice(current_pos)]
                    final_result=  [fieldName.valueOf(), buf.slice(current_pos)]
                }

              //  console.log('transform',_.has(opts,'transform'))
               return  _.has(opts,'transformFn') ?
                  [  _.first(final_result) , opts.transformFn( _.last(final_result))]
                   : final_result;
           //     return final_result;
            }
        )
        this._pos=  (_.has(opts,'length'))?  this._pos + opts.length.valueOf() : -1;
        return this;
    }




    string_hex(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        this._parseSequence.push(
            (buf)=>{  return [fieldName.valueOf(), buf.slice(current_pos,current_pos+opts.length.valueOf()).toString('hex')]}
        )
        this._pos= this._pos+ opts.length.valueOf();
        return this;
    }

    /**
    string(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        this._parseSequence.push(
            (buf)=>{  return [fieldName.valueOf(), buf.slice(current_pos,current_pos+opts.length.valueOf()).toString('ascii')]}
        )
        this._pos= this._pos+ opts.length.valueOf();
        return this;
    }
**/
    string(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        this._parseSequence.push(
            (buf)=> {
                var val = buf.slice(current_pos, current_pos + opts.length.valueOf()).toString('ascii');
                return [fieldName.valueOf(), _.isFunction(opts.transformFn) ? opts.transformFn(val) : val];
            }
        )
        this._pos= this._pos+ opts.length.valueOf();
        return this;
    }


    uint32le(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        // console.log(current_pos);
        this._parseSequence.push(
            //    (buf)=>{  return [fieldName.valueOf(), buf.slice(current_pos,current_pos+4).toString('ascii')]}
            (buf)=>{  return [fieldName.valueOf(), buf.readUInt32LE(current_pos)]}
        )
        this._pos= this._pos+ 4;
        return this;
    }

    uint32be(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        // console.log(current_pos);
        this._parseSequence.push(
            //    (buf)=>{  return [fieldName.valueOf(), buf.slice(current_pos,current_pos+4).toString('ascii')]}
            (buf)=>{  return [fieldName.valueOf(), buf.readUInt32BE(current_pos)]}
        )
        this._pos= this._pos+ 4;
        return this;
    }

    uint32be_JNXPX(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        // console.log(current_pos);
        this._parseSequence.push(
            //    (buf)=>{  return [fieldName.valueOf(), buf.slice(current_pos,current_pos+4).toString('ascii')]}
            (buf)=>{  return [fieldName.valueOf(), buf.readUInt32BE(current_pos)/10.0]}
        )
        this._pos= this._pos+ 4;
        return this;
    }

    uint16be(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        // console.log(current_pos);
        this._parseSequence.push(
            //    (buf)=>{  return [fieldName.valueOf(), buf.slice(current_pos,current_pos+4).toString('ascii')]}
            (buf)=>{  return [fieldName.valueOf(), buf.readUInt16BE(current_pos)]}
        )
        this._pos= this._pos+ 2;
        return this;
    }

    uint64be(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        // console.log(current_pos);
        this._parseSequence.push(
            //    (buf)=>{  return [fieldName.valueOf(), buf.slice(current_pos,current_pos+4).toString('ascii')]}
            (buf)=>{  return [fieldName.valueOf(), buf.readBigUInt64BE(current_pos)]}
        )
        this._pos= this._pos+ 8;
        return this;
    }

    uint8(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        // console.log(current_pos);
        this._parseSequence.push(
            (buf)=>{  return [fieldName.valueOf(), buf.readUInt8(current_pos)]}
        )
        this._pos= this._pos+ 1;
        return this;
    }

    nest(fieldName,opts){
        var length = opts.length;
        var type_parser = opts.type;

        let  current_pos= this._pos.valueOf();
        this._parseSequence.push(
            (buf)=>{  return [fieldName.valueOf(), type_parser.parse(buf.slice(current_pos,current_pos+opts.length.valueOf()))   ]}
        )
        this._pos= this._pos+ opts.length.valueOf();
        return this;
    }


    skip(length){
        this._pos= this._pos+ length.valueOf();
        return this;
    }


    uint64le(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        // console.log(current_pos);
        this._parseSequence.push(
            //    (buf)=>{  return [fieldName.valueOf(), buf.slice(current_pos,current_pos+4).toString('ascii')]}
            (buf)=>{  return [fieldName.valueOf(), BigInt('0x'+_.chunk( buf.slice(current_pos,current_pos+8).toString('hex'),2).map((e)=>{return e.join('')}).reverse().join('')) ]}

            //   (buf)=>{  return [fieldName.valueOf(), buf.readUInt32LE(current_pos)]}
        )
        this._pos= this._pos+ 8;
        return this;
    }

    int32le(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        // console.log(current_pos);
        this._parseSequence.push(
           (buf)=>{  return [fieldName.valueOf(), buf.readInt32LE(current_pos)]}
        )
        this._pos= this._pos+ 4;
        return this;
    }

    uint16le(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        // console.log(current_pos);
        this._parseSequence.push(
            //    (buf)=>{  return [fieldName.valueOf(), buf.slice(current_pos,current_pos+4).toString('ascii')]}
            (buf)=>{  return [fieldName.valueOf(), buf.readUInt16LE(current_pos)]}
        )
        this._pos= this._pos+ 2;
        return this;
    }

    uint64le_jsepx(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        // console.log(current_pos);
        this._parseSequence.push(
            //    (buf)=>{  return [fieldName.valueOf(), buf.slice(current_pos,current_pos+4).toString('ascii')]}
            (buf)=>{
               let val= BigInt('0x'+_.chunk( buf.slice(current_pos,current_pos+8).toString('hex'),2).map((e)=>{return e.join('')}).reverse().join('')).toString(10)

                return [
                    fieldName.valueOf(),
                     val.substr(0, val.length - 8 ).padStart(1,'0')+ "."+val.substr( val.length - 8 )
                ]

            }

            //   (buf)=>{  return [fieldName.valueOf(), buf.readUInt32LE(current_pos)]}
        )
        this._pos= this._pos+ 8;
        return this;
    }

   /**
    dword32_4bit(fieldName,opts){
        let  current_pos= this._pos.valueOf();
        // console.log(current_pos);
        this._parseSequence.push(
            //    (buf)=>{  return [fieldName.valueOf(), buf.slice(current_pos,current_pos+4).toString('ascii')]}
            (buf)=>{  return [fieldName.valueOf(), buf.readUInt16BE(current_pos)]}
        )
        this._pos= this._pos+ 2;
        return this;
    }
    **/

}



export {Parser}