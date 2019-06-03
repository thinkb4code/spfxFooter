import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
	BaseApplicationCustomizer, PlaceholderContent, PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'FooterApplicationCustomizerStrings';

const LOG_SOURCE: string = 'FooterApplicationCustomizer';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Footer from './Footer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IFooterApplicationCustomizerProperties {
	// This is an example; replace with your own property
	testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class FooterApplicationCustomizer extends BaseApplicationCustomizer<IFooterApplicationCustomizerProperties> {
	private footer: PlaceholderContent | undefined;
	
	@override
	public onInit(): Promise<void> {
		this.context.placeholderProvider.changedEvent.add(this, this.renderFooter);
		return Promise.resolve();
	}

	private renderFooter(): void {
		if(!this.footer){
			this.footer = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom, {onDispose: this.dispose});

			if(!this.footer){
				// Log error here.
			}

			if(this.footer.domElement){
				const footerUI = React.createElement(Footer, {});
				ReactDOM.render(footerUI, this.footer.domElement);
			}
		}
	}
}
