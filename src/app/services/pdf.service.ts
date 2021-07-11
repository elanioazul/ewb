import { Injectable } from '@angular/core';
import { pdf } from '../../app/types/pdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  pdfsArray: pdf[] = [
    {
      id: 'MEN1-7SGSB7',
      src:'MEN1-7SGSB7.pdf'
    },
    {
      id: 'MEN1-7SGSY3',
      src:'MEN1-7SGSY3.pdf'
    },
    {
      id: 'MEN1-7SGU3N',
      src:'MEN1-7SGU3N.pdf'
    },
    {
      id: 'MEN1-7SGUGY',
      src:'MEN1-7SGUGY.pdf'
    },
    {
      id: 'MEN1-7SGVPB',
      src:'MEN1-7SGVPB.pdf'
    },
    {
      id: 'MEN1-7SGZF2',
      src:'MEN1-7SGZF2.pdf'
    },
    {
      id: 'MEN1-7SGZZN',
      src:'MEN1-7SGZZN.pdf'
    },
    {
      id: 'MEN1-7TMBR4',
      src:'MEN1-7TMBR4.pdf'
    },
    {
      id: 'MEN1-7TMCKX',
      src:'MEN1-7TMCKX.pdf'
    },
    {
      id: 'MEN1-7TMDTS',
      src:'MEN1-7TMDTS.pdf'
    },
    {
      id: 'MEN1-7TMEG4',
      src:'MEN1-7TMEG4.pdf'
    },
    {
      id: 'MEN1-7TMEZL',
      src:'MEN1-7TMEZL.pdf'
    },
    {
      id: 'MEN1-7TMFPT',
      src:'MEN1-7TMFPT.pdf'
    },
    {
      id: 'MEN1-7TMG84',
      src:'MEN1-7TMG84.pdf'
    },
    {
      id: 'MEN1-7U8D2S',
      src:'MEN1-7U8D2S.pdf'
    },
    {
      id: 'MEN1-7U8DWB',
      src:'MEN1-7U8DWB.pdf'
    },
    {
      id: 'MEN1-7U8ECQ',
      src:'MEN1-7U8ECQ.pdf'
    },
    {
      id: 'MEN1-7U8EWD',
      src:'MEN1-7U8EWD.pdf'
    },
    {
      id: 'MEN1-7U8FHQ',
      src:'MEN1-7U8FHQ.pdf'
    },
    {
      id: 'MENnyosie-7TMCKV',
      src:'MENnyosie-7TMCKV.pdf'
    },
    {
      id: 'MENnyosie-7TMDLJ',
      src:'MENnyosie-7TMDLJ.pdf'
    },
    {
      id:'MENnyosie-7TMEGG',
      src: 'MENnyosie-7TMEGG.pdf',
    },
    {
      id:'MENnyosie-7TMFCF',
      src: 'MENnyosie-7TMFCF.pdf',
    },
    {
      id:'MENnyosie-7TMFP9',
      src: 'MENnyosie-7TMFP9.pdf',
    },
    {
      id:'MENnyosie-7TMHN2',
      src: 'MENnyosie-7TMHN2.pdf',
    },
    {
      id:'MENnyosie-7TMJDK',
      src: 'MENnyosie-7TMJDK.pdf',
    },
    {
      id:'MENnyosie-7TMKCA',
      src: 'MENnyosie-7TMKCA.pdf',
    },
    {
      id:'MENnyosie-7TML54',
      src: 'MENnyosie-7TML54.pdf',
    },
    {
      id:'MENnyosie-7TMLNG',
      src: 'MENnyosie-7TMLNG.pdf',
    },
    {
      id:'MENnyosie-7U8EDE',
      src: 'MENnyosie-7U8EDE.pdf',
    },
    {
      id:'MENnyosie-7VCZK7',
      src: 'MENnyosie-7VCZK7.pdf',
    },
    {
      id:'MENnyosie-7VD3CS',
      src: 'MENnyosie-7VD3CS.pdf',
    },
    {
      id:'MENnyosie-7VD3CS',
      src: 'MENnyosie-7VD3CS.pdf',
    },
    {
      id:'MENnyosie-7VD4L9',
      src: 'MENnyosie-7VD4L9.pdf',
    },
    {
      id:'MENnyosie-7VD4XW',
      src: 'MENnyosie-7VD4XW.pdf',
    },
    {
      id:'MENnyosie-7VD5B2',
      src: 'MENnyosie-7VD5B2.pdf',
    },
    {
      id:'MENnyosie-7VD5NT',
      src: 'MENnyosie-7VD5NT.pdf',
    },
    {
      id:'MENnyosie-7VD6KB',
      src: 'MENnyosie-7VD6KB.pdf',
    },
    {
      id:'MENnyosie-7VD7MS',
      src: 'MENnyosie-7VD7MS.pdf',
    },
    {
      id:'MENnyosie-7VD7ZR',
      src: 'MENnyosie-7VD7ZR.pdf',
    },
    {
      id:'MENnyosie-7VD8FE',
      src: 'MENnyosie-7VD8FE.pdf',
    },
    {
      id:'MENnyosie-7VD8TP',
      src: 'MENnyosie-7VD8TP.pdf',
    },
    {
      id:'MENnyosie-7VD9RA',
      src: 'MENnyosie-7VD9RA.pdf',
    },
    {
      id:'MENnyosie-7VD67D',
      src: 'MENnyosie-7VD67D.pdf',
    },
    {
      id:'MENnyosie-7VD473',
      src: 'MENnyosie-7VD473.pdf',
    },
    {
      id:'MENnyosie-7VD753',
      src: 'MENnyosie-7VD753.pdf',
    },
    {
      id:'MENnyosie-7VD964',
      src: 'MENnyosie-7VD964.pdf',
    },
    {
      id:'MENnyosie-7VDA3E',
      src: 'MENnyosie-7VDA3E.pdf',
    },
    {
      id:'MENnyosie-7VDAQR',
      src: 'MENnyosie-7VDAQR.pdf',
    },
    {
      id:'MENnyosie-7VDB9W',
      src: 'MENnyosie-7VDB9W.pdf',
    },
    {
      id:'MENnyosie-7VDBMQ',
      src: 'MENnyosie-7VDBMQ.pdf',
    }
  ]

  constructor() { }
}
