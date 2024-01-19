"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function ViewModalTodo() {
	

	return (
		<div>
			<Modal.Header>
					<div className="flex gap-5">
						<h1 className="text-lg font-semibold">hello world</h1>
						<div className="flex flex-wrap gap-2">
							<Button outline gradientDuoTone="purpleToBlue">
								Medium
							</Button>
							<Button outline gradientDuoTone="greenToBlue">
								Team
							</Button>
						</div>
					</div>
				</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							With less than a month to go before the European
							Union enacts new consumer privacy laws for its
							citizens, companies around the world are updating
							their terms of service agreements to comply. Lorem
							ipsum dolor sit amet, consectetur adipisicing elit.
							Molestias ex amet possimus exercitationem eaque
							corrupti inventore totam quidem blanditiis eum.
						</p>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button color="red" onClick={() => setOpenModal(false)}>
						Close
					</Button>
				</Modal.Footer>
		</div>
	);
}
