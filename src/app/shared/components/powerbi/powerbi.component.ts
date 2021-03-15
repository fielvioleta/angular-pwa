import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as pbi from 'powerbi-client'; 
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-powerbi',
  templateUrl: './powerbi.component.html',
  styleUrls: ['./powerbi.component.css']
})
export class PowerbiComponent implements OnInit {
  report: pbi.Embed;
  @ViewChild('reportContainer', {static: true, read: ElementRef}) reportContainer: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.showReport();
  }

  showReport() {
    // Embed URL    
    let embedUrl = environment.reportBaseURL;
    let embedReportId = environment.reportID;
    let settings: pbi.IEmbedSettings = {
        filterPaneEnabled: false,
        navContentPaneEnabled: false,
      };
    let config: pbi.IEmbedConfiguration = {
        type: 'report',
        tokenType: pbi.models.TokenType.Embed,
        accessToken: 'H4sIAAAAAAAEAB1WxQ7sCA78l3fNSmFaaQ7hDjPeAh1mTkb779sz97Isl6vK_vuPlT79lBZ__vuHE_wj2GwQ2XzRfjhguIhvWbM12Dv2WYjx9AGh_SjP14qkysKDcwTMzbwuCH5IfYeTURHm6ortOQRXQr0XZThf2_bvQyQChk531xoWESyn6eXardDxh-LIyXAYawib6-NXARx_HB15bgqaiQ3SLYhjYsG1afDqwH2rct2a5Wy5SijpENQ_6oWoNvy0r5RjjE7b4nM13QG_0qTkysPeHzZGYgwx9XvZP88pR_4u8pTeTLBaDJpeC8uXiFip7Q_V0lSvZewFSyPmK8Z-BObOjajrJ6x84ybzQiCv5eB1RVOG5Wm1Am1cua76NjnQ6Rva2YoIcTSU_oyoBhavojltuH0QZtmyaMxbJDW2b7jVFfx1HW0rLUBKjTJfhH2eMWF0G8ygnzb8thBDOBQpprjQcqZSoRXcfO-gW5MNg3pcr2U27eeBS4LTij9G8_bqI5jrg0gg-eOvm4r7ayIbSlcGVZ5PR5gW1XpgnG5qilPYc_kIl5WLE3sdA_SJ6bN41cZD_AOAeR7RwjG5xeNrKN_Ljw-gGNVxEDgFoAtosPD6gWUA4YeFYlGk8qfADO8o38Ti-wTOCXbS4KmlLyo4ToIcEdxXVysUoVvJaUb2ZQKXrFw0xGgcv4pm-lEFfJ-qsBCAgHtTRiWslqB6x3vsPunQWtc-YOa87GSKAZHMDXhs1L22wE0GjBnmSA8ibMCo3F2w_-DKR9BfUBDvplyRRmJfXiVjjJ_UzokYIe3a6AB9dQ90aeddkVcagmeh5jqMMHomuENfDFppLwxJlebeqSbAtgnXNRVzf-TNkOqJi-0wgBf3b8njgnk-ftSXjsgOXCmyQkMgZsUAOSZL_XDgJVh8BGTW3I3DzdPDwqDCoRkMltzApv0Cakf_7YIOeyjezcrJ8xM6hTXYRNm15vsENRobEG4bgyioSRm_HMsqJTDZxquvKdDFkugwFBJNHJvWSQe6tkllGX7K5xMCx-GRnxn90BZtjA9ekrELoSbFQw9dGmuljJpUY065HDdOuISZHhJ2bbVutvzX9yL9odKxKba-BwKWHoHTYBS4oxVShPyVZGUteA4e5TGegXDioqZo6-lo8qSJ_CqLN9te4S2LIUXNt5czO9wCX4aNCbfEUn0xpLa_AENr0lgvkZ9OHtUB0iWSeSdzzmP6qaqgopBNgEsAH80AXkV6PmopitiNocFsS7HzXppKws_WRLZzjrgls81lM5xW12d_uXK0VWLDCxQpG36ccC_Ms-38eE4waKDF5HHEc14shhddpTza24OHX_a6uuBpM6KwTdijCSnF8jVtdit8JxMF4JCgwDxZNXSMRY7GazPWCY6kZczNp2khfYy8v5ukZtfQ9fARmTpJ6klp6cCRhyscewJ9aRU2pXl8vD9Pb2lyyLx-25oH4e6e7rjKlsM321aY4uvXijUceBNzlZl2E2affDo19WNmV5JDgOTjPQ_lTUT1A0WlxIQH9_lNJ5BGaDNkq9XXTSwGb8Fp6lgi7IkWRbEpQVZgsudUyrlXIk3b2mCAs62-zCWcMZY4-1s_XBGF-rioMb4RTHdCeBuTwQDxPaRFVWIXUr1KLfQnOmZxqtT2N9FSzJbVdp418LM6gmigqY3ReKglwTpHV7oJcvDBimFN90xY--LXoYf01wwGnBj4vNoLe7vSFcLEYJ4M1O1eQF_1cv_loekXgDYTEdSiVRsag14taGN5n6GX7VzI5vaIQb6y7rOIGJ1smRmkRB34wFynOg0F3uQ3g12LBw2s61oYHrcoHrzeGpjFSzgnJHioC7Z_dBrogxfks3IfpWB3UumLu8RXE3KrTCFp3FzPHyf5llU6zYc6vQssac0Jtr_hOYhDduky3SKl4TU2tXq7FbaZF1sgCnKgLJJOBSSh3298vJnvJDSt7N-lk9KAGA03TtI1vBSgn3zdmtBy7cS66PkQqpu11drSudxAv22nFAReaK3DHczb6a8nacl4CX9Ky0FlS_sog64zO_CHZZCVm9yfD-eZezh4IWhuRieSyaMvl5YFjnwwIcJmpCHnlT5-N20ZUVIcxs2Wd2j5npOPa0GKgwY8Pq6dcX5EOVjHvh3u1Fo9B7iT7qtRXEw0cmFOq-yUFa19dbQIZeodEjPhOhxeaQif8rGOZJkPmGFnRd-9YI9Zr0wueoU-o8JPnKbqrpC4Scp3PXrtPaA39qrdrwXzhcIvEvTOHAihaWRGiXmtyFZpvryWlBSEF3Ww2WtRPqgyu1_msFJDwkMZ50FinkPleUpMXp9PXgM72haiS6D1w-s0MwcKBxSJDXCUA8hQH0rdSAHsVK2nkF5YUw5fZT5L7qpDrUXZPJwpu1_GI4sgEC2PL5Ogsp48w3Jn3YiV38db1d-ANfqiArhRS6ZPjRF053aQZkRB7mkUN1w_-1QuPumvqQc0BSB-H9EyF0bv8r_-_OcPtz7zPqnf5_d6rUPsaAH0Kac2cHod1EkqD6VBfAWuvr0sinJOnXttQN7cmpxjM53yEoWut5I4XryXwW_Mknhx66PnSXUMXdva28-d8JKHWUVOC9N46fg-vMvM9g9c4S80b-uu68mVNODm0Z-VXzigGTkpiLpKvOFu-drJyLHP6DE_58H3gVqcXNG7l3s1YYSe0hceKRWe8JF32dt58eDUCVyH2uULEy3EFkMQtdOdiW_g3mCLlkPM5d6SraHcrYG23fI0QfFShOyUku39-S7Me0a9E-YzXzLlw1za1xfesgcRcm6FHkACMn2FelYG_QmCbuEBjld334EgAMwS9GTQt1M9t7qoxS_naLT_-pfmZ66_qxz8WMYibHdUFbIBdck74ReJxjsx_6LcphrT_Vi_P1gAljerXfc8gQBEkz-rfVbJJdyOJStNVPRNV80S4YhgsBijlowvI1m6JDry7xXFClyG6_iu7Q6W63UAKVcktoO46pKSNCij3rlxzSQZvHYLHiTBXrIA1F-94y3P8_qvgMdzCQvn0Ki5OcIHOJCVPuKAxDYhz4R7vzEQlO38LjmqZruzJkQgtltE3YGVSMiGc85exYAnYAXUTwyAVh1iyehjsTkT2PMWm6knHetsjWfmvDUxYPAu-SDv5CNbHKFTNKQ8ljTcTdYgwvAkQ0TiA5g7IAqQ87zkMbK6rorjp5Grlm5vRy8TFTd1BonFDdfZRwNLlLIXW_SqmgEpemdwsDHmf5bxv_8DAjRjem4MAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19',
        embedUrl: embedUrl,
        id: embedReportId,
        filters: [],
        settings: settings
      };
    let reportContainer = this.reportContainer.nativeElement;
      let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
      this.report = powerbi.embed(reportContainer, config);
      this.report.off("loaded");
    this.report.on("loaded", () => {
        console.log("Loaded");
        // this.setTokenExpirationListener(Token.expiration, 2);
      });
    this.report.on("error", () => {
        console.log("Error");
      });
  } 
}
