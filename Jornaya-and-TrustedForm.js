function myCallbackFunction(token) {
var field = document.querySelector("#form-field-leadid_token");
if (field) {
field.setAttribute('value', token);
}
}
</script>

<script id="LeadiDscript" type="text/javascript">
(function() {
var s = document.createElement('script');
s.id = 'LeadiDscript_campaign';
s.type = 'text/javascript';
s.async = true;
s.src = '//create.lidstatic.com/campaign/05f38de9-9955-605e-df0d-6a32664f2906.js?snippet_version=2&f=reset&callback=myCallbackFunction';
var LeadiDscript = document.getElementById('LeadiDscript');
LeadiDscript.parentNode.insertBefore(s, LeadiDscript);
})();
</script>
<noscript><img src='//create.leadid.com/noscript.gif?lac=37DEAE84-93FF-73F2-C484-CB4C5847B753&lck=05f38de9-9955-605e-df0d-6a32664f2906&snippet_version=2' /></noscript>


<!-- TrustedForm Field Replacement -->
<script type="text/javascript">
function xxTrustedFormCertUrl(token) {
var field = document.querySelector("form-field-trustedformcerturl");
if (field) {
field.setAttribute('value', token);
}
}
 function xxTrustedFormPingUrl(token) {
var field = document.querySelector("form-field-trustedformpingurl");
if (field) {
field.setAttribute('value', token);
}
}
</script>
<!-- End TrustedForm Field Replacement -->

<!-- TrustedForm -->
<script type="text/javascript">
(function() {
var tf = document.createElement('script');
tf.type = 'text/javascript'; tf.async = true;
tf.src = ("https:" == document.location.protocol ? 'https' : 'http') + "://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&l=" + new Date().getTime() + Math.random();
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tf, s);
})();
</script>
<noscript>
<img src="https://api.trustedform.com/ns.gif" />
</noscript>
<!-- End TrustedForm -->

<!-- Jeffrey's Fix -->
		let intervalID  = setInterval((event) => {
    		let tft = document.getElementById('xxTrustedFormToken_1');
		let tfc = document.getElementById('xxTrustedFormCertUrl_1');
		let tfp = document.getElementById('xxTrustedFormPingUrl_1');
		
		document.getElementById('form-field-tft').setAttribute('value',tft.value);
		document.getElementById('form-field-tfcu').setAttribute('value',tfc.value);
		document.getElementById('form-field-tfpu').setAttribute('value',tfp.value);
	}, 10);  
<!-- End Jeffrey's Fix -->
