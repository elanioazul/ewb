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
      src:'MENnyosie-7TMEGG',
      id: 'MENnyosie-7TMEGG.pdf',
    },
    {
      src:'MENnyosie-7TMFCF',
      id: 'MENnyosie-7TMFCF.pdf',
    },
    {
      src:'MENnyosie-7TMFP9',
      id: 'MENnyosie-7TMFP9.pdf',
    },
    {
      src:'MENnyosie-7TMHN2',
      id: 'MENnyosie-7TMHN2.pdf',
    },
    {
      src:'MENnyosie-7TMJDK',
      id: 'MENnyosie-7TMJDK.pdf',
    },
    {
      src:'MENnyosie-7TMKCA',
      id: 'MENnyosie-7TMKCA.pdf',
    },
    {
      src:'MENnyosie-7TML54',
      id: 'MENnyosie-7TML54.pdf',
    },
    {
      src:'MENnyosie-7TMLNG',
      id: 'MENnyosie-7TMLNG.pdf',
    },
    {
      src:'MENnyosie-7U8EDE',
      id: 'MENnyosie-7U8EDE.pdf',
    },
    {
      src:'MENnyosie-7VCZK7',
      id: 'MENnyosie-7VCZK7.pdf',
    },
    {
      src:'MENnyosie-7VD3CS',
      id: 'MENnyosie-7VD3CS.pdf',
    },
    {
      src:'MENnyosie-7VD3CS',
      id: 'MENnyosie-7VD3CS.pdf',
    },
    {
      src:'MENnyosie-7VD4L9',
      id: 'MENnyosie-7VD4L9.pdf',
    },
    {
      src:'MENnyosie-7VD4XW',
      id: 'MENnyosie-7VD4XW.pdf',
    },
    {
      src:'MENnyosie-7VD5B2',
      id: 'MENnyosie-7VD5B2.pdf',
    },
    {
      src:'MENnyosie-7VD5NT',
      id: 'MENnyosie-7VD5NT.pdf',
    },
    {
      src:'MENnyosie-7VD6KB',
      id: 'MENnyosie-7VD6KB.pdf',
    },
    {
      src:'MENnyosie-7VD7MS',
      id: 'MENnyosie-7VD7MS.pdf',
    },
    {
      src:'MENnyosie-7VD7ZR',
      id: 'MENnyosie-7VD7ZR.pdf',
    },
    {
      src:'MENnyosie-7VD8FE',
      id: 'MENnyosie-7VD8FE.pdf',
    },
    {
      src:'MENnyosie-7VD8TP',
      id: 'MENnyosie-7VD8TP.pdf',
    },
    {
      src:'MENnyosie-7VD9RA',
      id: 'MENnyosie-7VD9RA.pdf',
    },
    {
      src:'MENnyosie-7VD67D',
      id: 'MENnyosie-7VD67D.pdf',
    },
    {
      src:'MENnyosie-7VD473',
      id: 'MENnyosie-7VD473.pdf',
    },
    {
      src:'MENnyosie-7VD753',
      id: 'MENnyosie-7VD753.pdf',
    },
    {
      src:'MENnyosie-7VD964',
      id: 'MENnyosie-7VD964.pdf',
    },
    {
      src:'MENnyosie-7VDA3E',
      id: 'MENnyosie-7VDA3E.pdf',
    },
    {
      src:'MENnyosie-7VDAQR',
      id: 'MENnyosie-7VDAQR.pdf',
    },
    {
      src:'MENnyosie-7VDB9W',
      id: 'MENnyosie-7VDB9W.pdf',
    },
    {
      src:'MENnyosie-7VDBMQ',
      id: 'MENnyosie-7VDBMQ.pdf',
    }
  ]

  constructor() { }
}
